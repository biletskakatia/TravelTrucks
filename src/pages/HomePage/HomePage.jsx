import { Link } from "react-router-dom";
export default function HomePage() {
    return (
        <div>
            <h1>Campers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
            <Link to= "/catalog">
                <button>View Now</button>
            </Link>
        </div>
    );
}