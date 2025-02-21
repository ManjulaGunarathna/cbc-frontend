import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="homepage">
            <header>
                <h1>Welcome to Our Website!</h1>
                <p>Your journey starts here.</p>
            </header>
            <section className="content">
                <div className="feature">
                    <h2>Explore</h2>
                    <p>Discover new and exciting content every day.</p>
                </div>
                <div className="feature">
                    <h2>Learn</h2>
                    <p>Grow your skills and knowledge with our resources.</p>
                </div>
                <div className="feature">
                    <h2>Connect</h2>
                    <p>Join a community of like-minded individuals.</p>
                    <Link to="/login">Login</Link>
                </div>
            </section>
            <footer>
                <p>&copy; 2025 Our Website. All rights reserved.</p>
            </footer>
        </div>
    );
}
