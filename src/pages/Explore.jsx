import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
    return (
        <div className='explore'>
            <header>
                <p className="pageHeader">Explore</p>
            </header>
            <main>
                <p className="exploreCategoryHeading">
                    Categories
                </p>
                <div className="exploreCartegories">
                    <Link to="/catgory/rent">
                        <img src={rentCategoryImage} alt="rent image" className='exploreCategoryImg' />
                    </Link>
                    <p className="exploreCategoryName">Places for rent</p>
                    <Link to="/catgory/sale">
                        <img src={sellCategoryImage} alt="sell image" className='exploreCategoryImg' />
                    </Link>
                    <p className="exploreCategoryName">Places for sale</p>
                </div>
            </main>
        </div>
    )
}

export default Explore