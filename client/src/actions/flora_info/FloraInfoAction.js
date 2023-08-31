import axios from "axios";

export const createNewFlora = async (
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
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setProfileImage,
  setCommonName,
  setScientificName,
  setLocalName,
  setFamilyName,
  setSpeciesName,
  setGenus,
  setOrder,
  setUses,
  setClassName,
  setKind,
  setProvince,
  setMunicipality,
  setBarangay,
  setLeafImage,
  setFruitImage,
  setFlowerImage,
  setDescription,
  setPhylum,
  setProfileImageContainer,
  setLeafImageContainer,
  setFlowerImageContainer,
  setFruitImageContainer,
  setEnglish,
  setLeafKind,
  setFloraType,
  setLeafDescription,
  setFlowerDescription,
  setFruitDescription
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/flora-info/create",
      {
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
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Created Successfully!");
    setProfileImage("");
    setCommonName("");
    setScientificName("");
    setLocalName("");
    setFamilyName("");
    setSpeciesName("");
    setGenus("");
    setOrder("");
    setUses("");
    setClassName("");
    setKind("");
    setProvince("");
    setMunicipality("");
    setBarangay("");
    setLeafImage("");
    setFruitImage("");
    setFlowerImage("");
    setDescription("");
    setPhylum("");
    setProfileImageContainer("");
    setLeafImageContainer("");
    setFlowerImageContainer("");
    setFruitImageContainer("");
    setEnglish("")
    setLeafKind("")
    setFloraType("")
    setLeafDescription("")
    setFlowerDescription("")
    setFruitDescription("")
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
  }
};

export const updateFloraInfo = async (
  index,
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
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError,
  setProfileImageContainer,
  setLeafImageContainer,
  setFlowerImageContainer,
  setFruitImageContainer
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      "/api/flora-info/update",
      {      
        id: index._id,
        english: english === "" ? index.english : english,
        leafKind: leafKind === "" ? index.leafKind : leafKind,
        floraType: floraType === "" ? index.floraType : floraType,
        leafDescription: leafDescription === "" ? index.leafDescription : leafDescription,
        flowerDescription: flowerDescription === "" ? index.flowerDescription : flowerDescription,
        fruitDescription: fruitDescription === "" ? index.fruitDescription : fruitDescription,
        profileImage: profileImage === null ? index.profileImage : profileImage,
        commonName: commonName === "" ? index.commonName : commonName,
        scientificName:
          scientificName === "" ? index.scientificName : scientificName,
        localName: localName === "" ? index.localName : localName,
        familyName: familyName === "" ? index.familyName : familyName,
        speciesName: speciesName === "" ? index.speciesName : speciesName,
        genus: genus === "" ? index.genus : genus,
        order: order === "" ? index.order : order,
        uses: uses === "" ? index.uses : uses,
        className: className === "" ? index.className : className,
        kind: kind === "" ? index.kind : kind,
        province: province === "" ? index.province : province,
        municipality: municipality === "" ? index.municipality : municipality,
        barangay: barangay === "" ? index.barangay : barangay,
        leafImage: leafImage === null ? index.leafImage : leafImage,
        fruitImage: fruitImage === null ? index.fruitImage : fruitImage,
        flowerImage: flowerImage === null ? index.flowerImage : flowerImage,
        description: description === "" ? index.description : description,
        phylum: phylum === "" ? index.phylum : phylum,
      },
      config
    );
    handleSnackbarOpenSuccess();
    setSucceed("Flora Info Updated Successfully!");
    setProfileImageContainer(null);
    setLeafImageContainer(null);
    setFlowerImageContainer(null);
    setFruitImageContainer(null);
    return data;
  } catch (error) {
    handleSnackbarOpenError();
    setErr("No Data Created!!");
  }
};

export const getFloraInfos = async (setSearchResult) => {
  try {
    const { data } = await axios.get(`/api/flora-info`);
    setSearchResult(data);
  } catch (error) {
    alert("error");
  }
};

export const searchFloraInfo = async (search, setSearchResult, setLoading) => {
  try {
    setLoading(true);
    const { data } = await axios.get(
      `/api/flora-info/keyword?search=${search}`
    );
    setSearchResult(data);
    setLoading(false);
  } catch (error) {
    alert("Cannot Fetch API");
    setLoading(false);
  }
};


export const updateToArchive = async (
  index,
  archive
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      "/api/flora-info/archive",
      {
        id: index._id,
        isArchived: archive
      },
      config
    );
    return data;
  } catch (error) {
    alert(error.message)
  }
};