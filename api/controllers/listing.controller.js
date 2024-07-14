import Listing from '../models/listing.model.js';
import { errorHandler } from '../utils/error.js';

export const createListing = async(req, res, next) => {
    try {
        const listing = await Listing.create({
            ...req.body,
            isApproved: false, // Default to not approved
        });
        console.log("Created listing:", listing);
        return res.status(201).json(listing);
    } catch (error) {
        console.error("Error creating listing:", error);
        next(error);
    }
};

export const approveListing = async(req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return next(errorHandler(404, 'Listing not found!'));
        }

        if(listing.isApproved === false){
            listing.isApproved = true;
        }else{
            listing.isApproved = false;
        }
        await listing.save();
        console.log("Approved listing:", listing);
        return res.status(200).json(listing);
    } catch (error) {
        console.error("Error approving listing:", error);
        next(error);
    }
};

export const deleteListing = async(req, res, next) => {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
    }

    if (req.user.id !== listing.userRef) {
        return next(errorHandler(401, 'You can only delete your own listings!'));
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        console.log("Deleted listing with ID:", req.params.id);
        res.status(200).json('Listing has been deleted!');
    } catch (error) {
        console.error("Error deleting listing:", error);
        next(error);
    }
};

export const updateListing = async(req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== listing.userRef) {
        return next(errorHandler(401, 'You can only update your own listings!'));
    }
    if (!listing.isApproved) {
        return next(errorHandler(403, 'Cannot update unapproved listings!'));
    }

    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );
        console.log("Updated listing:", updatedListing);
        res.status(200).json(updatedListing);
    } catch (error) {
        console.error("Error updating listing:", error);
        next(error);
    }
};

export const getListing = async(req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return next(errorHandler(404, 'Listing not found!'));
        }
        if (!listing.isApproved) {
            return next(errorHandler(403, 'Cannot fetch unapproved listings!'));
        }
        console.log("Fetched listing:", listing);
        res.status(200).json(listing);
    } catch (error) {
        console.error("Error fetching listing:", error);
        next(error);
    }
};

export const getAllListings = async(req, res, next) => {
    try {
        
        const currentAdmin = JSON.parse(req.headers['current-admin']); // Parse currentAdmin from headers
        console.log("Request user:", currentAdmin);
        const isAdmin = currentAdmin.role==='admin' ? true : false; // Check if the request is from an admin
        const filter = isAdmin ? {} : { isApproved: true };
        console.log("Filter is:", filter);
        const listings = await Listing.find(filter);
        //console.log("Fetched all listings:", listings);
        res.status(200).json(listings);
    } catch (error) {
        console.error("Error fetching all listings:", error);
        next(error);
    }
};

export const getListings = async(req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 9;
        const startIndex = parseInt(req.query.startIndex) || 0;
        let offer = req.query.offer;

        if (offer === undefined || offer === 'false') {
            offer = { $in: [false, true] };
        }

        let furnished = req.query.furnished;

        if (furnished === undefined || furnished === 'false') {
            furnished = { $in: [false, true] };
        }

        let parking = req.query.parking;

        if (parking === undefined || parking === 'false') {
            parking = { $in: [false, true] };
        }

        let type = req.query.type;

        if (type === undefined || type === 'all') {
            type = { $in: ['sale', 'rent'] };
        }

        const searchTerm = req.query.searchTerm || '';
        let address = req.query.location;
        if (address === undefined) {
            address = '';
        } else {
            address = req.query.location
                .replace(/[,.\s]+$/, '')
                .split(/\s*,\s*/)
                .map(word => `\\b\\p{L}*${word}\\p{L}*\\b`)
                .join('|');
        }

        const sort = req.query.sort || 'createdAt';
        const order = req.query.order || 'desc';

        const listings = await Listing.find({
                name: { $regex: searchTerm, $options: 'i' },
                address: { $regex: address, $options: 'i' },
                offer,
                furnished,
                parking,
                type,
                isApproved: true, // Only fetch approved listings
            })
            .sort({
                [sort]: order
            })
            .limit(limit)
            .skip(startIndex);

        console.log("Fetched filtered listings:", listings);
        return res.status(200).json(listings);
    } catch (error) {
        console.error("Error fetching filtered listings:", error);
        next(error);
    }
};
