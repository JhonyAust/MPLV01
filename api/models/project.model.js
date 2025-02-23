import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['Residential', 'Commercial', 'Mixed Use'], required: true },
    imageUrl: [{ type: String }],
    address: { type: String, required: true },
    atAGlance: {
        projectName: { type: String },
        architect: { type: String },
        projectLocation: { type: String },
        landSize: { type: String },
        facing: { type: String },
        frontRoad: { type: String },
        numberOfApartments: { type: Number },
        apartmentSize: { type: Map, of: Number },
        numberOfBasement: { type: Number },
        numberOfCarParking: { type: Number },
    },
    projectStatus: { type: String, enum: ['Planning', 'In Progress', 'Completed'], required: true },
    featuresAndAmenities: [{ type: String }]
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);