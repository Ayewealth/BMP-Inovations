import React, { useEffect, useState, useRef } from 'react';
import { CalendarPlus2, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogData from '../../utils/blog';
import './BlogPost.scss';

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const observerTarget = useRef(null);

    // Function to fetch posts
    const fetchPosts = () => {
        if (loading || !hasMore) return;
        setLoading(true);

        setTimeout(() => {
            const newPosts = blogData.slice((page - 1) * 3, page * 3);
            if (newPosts.length > 0) {
                setPosts(prevPosts => [...prevPosts, ...newPosts]);
                setPage(prevPage => prevPage + 1);
            } else {
                setHasMore(false);
            }
            setLoading(false);
        }, 1000);
    };

    // Fetch initial posts
    useEffect(() => {
        fetchPosts();
    }, []);

    // Intersection observer for infinite scrolling
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !loading && hasMore) {
                    fetchPosts();
                }
            },
            { threshold: 1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [loading, hasMore]);

    // Filter posts based on category and search term
    useEffect(() => {
        const filtered = posts.filter(post => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        setFilteredPosts(filtered);
    }, [posts, selectedCategory, searchTerm]);

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setPage(1);
        setHasMore(true);
        setPosts([]);
        fetchPosts();
    };

    // Handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='small__section'>
            <div className="container">
                <div className="blog__posts-container">
                    <div className="blog__posts"
                        data-aos="fade-right"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        {filteredPosts.map(post => (
                            <div key={post.id} className='blog__posts-post'
                                data-aos="fade-up"
                                ata-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <div className='blog__posts-post-img'>
                                    <img src={post.image} alt="" />
                                    <div>
                                        <CalendarPlus2 />
                                        <p>{post.date}</p>
                                    </div>
                                </div>
                                <div className='blog__posts-post-inner'>
                                    <div>
                                        <h5 onClick={() => handleCategoryChange(post.category)}>{post.category}</h5>
                                        <span></span>
                                        <p>Comments ({post.comments})</p>
                                    </div>
                                    <Link to={`/blog/${post.id}`} id='blog__title'>{post.title}</Link>
                                </div>
                                <Link to={`/blog/${post.id}`} id='read__more'>Read More <MoveUpRight /></Link>
                            </div>
                        ))}
                        {loading && <p>Loading more posts...</p>}
                        <div ref={observerTarget} style={{ height: '1px' }} />
                    </div>
                    <div className='blog__posts-sidebar'
                        data-aos="fade-left"
                        ata-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <div className='blog__posts-sidebar-search'>
                            <h2>Search Here</h2>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Search Here'
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <button><BiSearch /></button>
                            </div>
                        </div>
                        <div className='blog__posts-category'>
                            <h2>Category</h2>
                            <ul>
                                <li>
                                    <div>
                                        <GoArrowUpRight />
                                        <Link onClick={() => handleCategoryChange('All')}>All</Link>
                                    </div>
                                    <p>({posts.length})</p>
                                </li>
                                <li>
                                    <div>
                                        <GoArrowUpRight />
                                        <Link onClick={() => handleCategoryChange('Software Development')}>Software Development</Link>
                                    </div>
                                    <p>({posts.filter(post => post.category === 'Software Development').length})</p>
                                </li>
                                <li>
                                    <div>
                                        <GoArrowUpRight />
                                        <Link onClick={() => handleCategoryChange('Brand Identity')}>Brand Identity</Link>
                                    </div>
                                    <p>({posts.filter(post => post.category === 'Brand Identity').length})</p>
                                </li>
                                <li>
                                    <div>
                                        <GoArrowUpRight />
                                        <Link onClick={() => handleCategoryChange('Automation')}>Automation</Link>
                                    </div>
                                    <p>({posts.filter(post => post.category === 'Automation').length})</p>
                                </li>
                                <li>
                                    <div>
                                        <GoArrowUpRight />
                                        <Link onClick={() => handleCategoryChange('Digital Marketing')}>Digital Marketing</Link>
                                    </div>
                                    <p>({posts.filter(post => post.category === 'Digital Marketing').length})</p>
                                </li>
                                <li>
                                    <div>
                                        <GoArrowUpRight />
                                        <Link onClick={() => handleCategoryChange('Content and Social Media')}>Content and Social Media</Link>
                                    </div>
                                    <p>({posts.filter(post => post.category === 'Content and Social Media').length})</p>
                                </li>
                            </ul>
                        </div>
                        <div className="blog__posts-recents">
                            <h2>Social Share</h2>
                            <ul>
                                <li>
                                    <Link to="https://www.instagram.com/bmpinovations/" target='_blank'>
                                        <FaInstagram />
                                        <p>Instagram</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://x.com/BmpInovati51862" target='_blank'>
                                        <FaXTwitter />
                                        <p>Twitter</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://web.facebook.com/p/BMP-Inovations-61557111026850/?_rdc=1&_rdr" target='_blank'>
                                        <FaFacebook />
                                        <p>Facebook</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/bmp-inovations" target='_blank'>
                                        <FaLinkedin />
                                        <p>LinkedIn</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;
