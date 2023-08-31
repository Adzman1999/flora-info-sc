const asyncHandler = require("express-async-handler");
const FloraInfo = require("../../models/flora_info/FloraInfoModel");

const createFloraInfo = asyncHandler(async (req, res) => {
  try {
    const {
      english,
      leafKind,
      floraType,
      leafDescription,
      flowerDescription,
      fruitDescription,
      profileImage,
      commonName,
      scientificName,
      localName,
      familyName,
      speciesName,
      genus,
      order,
      uses,
      className,
      kind,
      province,
      municipality,
      barangay,
      leafImage,
      fruitImage,
      flowerImage,
      description,
      phylum,
    } = req.body;
    const floraInfos = new FloraInfo({
      english,
      leafKind,
      floraType,
      leafDescription,
      flowerDescription,
      fruitDescription,
      profileImage,
      commonName,
      scientificName,
      localName,
      familyName,
      speciesName,
      genus,
      order,
      uses,
      className,
      kind,
      province,
      municipality,
      barangay,
      leafImage,
      fruitImage,
      flowerImage,
      description,
      phylum,
    });

    const savedFloraInfos = await floraInfos.save();

    res.status(201).json({
      success: true,
      savedFloraInfos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const allFloraInfos = asyncHandler(async (req, res) => {
  const keyword = req.query.search;
  const floraInfos = await FloraInfo.find(keyword);
  res.status(200).json(floraInfos.reverse());
});

const SearchFloraInfo = asyncHandler(async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { localName: { $regex: req.query.search, $options: "i" } },
            { commonName: { $regex: req.query.search, $options: "i" } },
            { scientificName: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const name = await FloraInfo.find(keyword);
    res.send(name);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

const updateFloraInfo = asyncHandler(async (req, res) => {
  const {
    id,
    leafKind,
    floraType,
    leafDescription,
    flowerDescription,
    fruitDescription,
    profileImage,
    commonName,
    scientificName,
    localName,
    familyName,
    speciesName,
    genus,
    order,
    uses,
    className,
    kind,
    province,
    municipality,
    barangay,
    leafImage,
    fruitImage,
    flowerImage,
    description,
    phylum,
  } = req.body;
  const updatedFloraInfo = await FloraInfo.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        leafKind,
        floraType,
        leafDescription,
        flowerDescription,
        fruitDescription,
        profileImage,
        commonName,
        scientificName,
        localName,
        familyName,
        speciesName,
        genus,
        order,
        uses,
        className,
        kind,
        province,
        municipality,
        barangay,
        leafImage,
        fruitImage,
        flowerImage,
        description,
        phylum,
      },
    }
  );

  if (!updatedFloraInfo) {
    res.status(404);
    throw new Error("Flora Info Not Found");
  } else {
    res.json(updatedFloraInfo);
  }
});


const updateToArchive = asyncHandler(async (req, res) => {
  const {
    id,
    isArchived,
  } = req.body;
  const archived = await FloraInfo.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        isArchived,
      },
    }
  );

  if (!archived) {
    res.status(404);
    throw new Error("Flora Info Not Found");
  } else {
    res.json(archived);
  }
});

module.exports = {
  createFloraInfo,
  allFloraInfos,
  updateFloraInfo,
  SearchFloraInfo,
  updateToArchive
};
