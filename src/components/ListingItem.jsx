import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg'

import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

//add the following props-listing, id, onedit, ondelete
function ListingItem({ listing, id, onEdit, onDelete }) {
    return (
        <>
            <li className="categoryListing">
                <Link className="categoryListingLink" to={`/category/${listing.type}/${id}`}>
                    <img src={listing.imgUrls[0]}
                        alt={listing.name}
                        className='categoryListingImg'
                    ></img>

                    <div className="categoryListingDetails">
                        <p className="categoryListingLocation">
                            {listing.location}
                        </p>
                        <p className="categoryListingName">
                            {listing.name}
                        </p>

                        <p className='categoryListingPrice'>
                            $
                            {listing.offer
                                ? listing.discountedPrice
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                : listing.regularPrice
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            {listing.type === 'rent' && ' / Month'}
                        </p>
                        <div className="categoryListingInfoDiv">
                            <img src={bedIcon} alt="bed icon" />
                            <p className="categoryListingInfoText">
                                {listing.bedrooms > 1
                                    ? `${listing.bedrooms} Bedrooms`
                                    : ' 1 Bedroom'}
                            </p>
                            <img src={bathtubIcon} alt="bathtub icon" />
                            <p className="categoryListingInfoText">
                                {listing.bathrooms > 1
                                    ? `${listing.bathrooms} Bathrooms`
                                    : ' 1 Bathroom'}
                            </p>
                        </div>
                    </div>

                </Link>
                {onDelete && (
                    <DeleteIcon className='removeIcon' fill='rbg(231, 76, 60)' onClick={() => onDelete(listing.id, listing.name)}>
                    </DeleteIcon>
                )}
                {onEdit && (
                    <EditIcon className='editIcon' fill='rbg(231, 76, 60)' onClick={() => onEdit(id)}>
                    </EditIcon>
                )}

            </li>

        </>
    )
}

export default ListingItem