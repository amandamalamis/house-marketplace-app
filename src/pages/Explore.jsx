import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import Slider from '../components/Slider'

function Explore() {
    return (
        <div className='explore'>
            <header>
                <p className="pageHeader">Explore</p>
            </header>
            <main>
                <Slider />
                <p className="exploreCategoryHeading">
                    Categories
                </p>
                <div className="exploreCartegories">
                    <Link to="/category/rent">
                        <img src={rentCategoryImage} alt="rent image" className='exploreCategoryImg' />
                    </Link>
                    <p className="exploreCategoryName">Places for rent</p>
                    <Link to="/category/sale">
                        <img src={sellCategoryImage} alt="sell image" className='exploreCategoryImg' />
                    </Link>
                    <p className="exploreCategoryName">Places for sale</p>
                </div>
            </main>
        </div>
    )
}

export default Explore