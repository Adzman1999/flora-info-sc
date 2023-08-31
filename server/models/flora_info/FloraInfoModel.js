const mongoose = require("mongoose");

const floraInfoModel = mongoose.Schema(
  {
    english: String,
    leafKind: String,
    floraType: String,
    leafDescription: String,
    flowerDescription: String,
    fruitDescription: String,
    profileImage: String,
    commonName: String,
    scientificName: String,
    localName: String,
    familyName: String,
    speciesName: String,
    genus: String,
    order: String,
    uses: String,
    className: String,
    kind: String,
    province: String,
    municipality: String,
    barangay: String,
    leafImage: String,
    fruitImage: String,
    flowerImage: String,
    description: String,
    phylum: String,
    isArchived: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const FloraInfo = mongoose.model("flora_info", floraInfoModel);

module.exports = FloraInfo;
