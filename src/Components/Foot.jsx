// import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <p>contact us: <a href="tel:1234567890">+1234567890</a>
                Email: <a href="info@example.com">info@example.com</a></p>

                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>

                    <p>&copy;2025 AP Luxury Motors. All Right Reserve. </p>
                </div>

            </div>
        </>
    );
}
