/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClinic = /* GraphQL */ `
  mutation CreateClinic(
    $input: CreateClinicInput!
    $condition: ModelClinicConditionInput
  ) {
    createClinic(input: $input, condition: $condition) {
      id
      name
      owner
      createdAt
      updatedAt
      images {
        items {
          id
          name
          type
          alt
          usage
          title
          url
          identityId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      staffs {
        items {
          id
          name
          career
          message
          usage
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      introductions {
        items {
          id
          title
          description
          usage
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      infoForSearch {
        id
        name
        address
        feature
        symptom
        treatment
        phone
        openTimes
        owner
        createdAt
        updatedAt
      }
      open {
        id
        owner
        createdAt
        updatedAt
        weekPattern {
          nextToken
        }
        weekday {
          nextToken
        }
      }
      info {
        id
        name
        phone
        treatments
        features
        symptoms
        webReserve
        site
        owner
        createdAt
        updatedAt
        premium {
          id
          plan
          owner
          createdAt
          updatedAt
        }
        googleMap {
          id
          lat
          lng
          zoom
          markerLat
          markerLng
          owner
          createdAt
          updatedAt
        }
        nearests {
          nextToken
        }
        address {
          id
          str
          prefecture
          district
          subDistrict
          sourceDistrictId
          sourceSubDistrictId
          owner
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateClinic = /* GraphQL */ `
  mutation UpdateClinic(
    $input: UpdateClinicInput!
    $condition: ModelClinicConditionInput
  ) {
    updateClinic(input: $input, condition: $condition) {
      id
      name
      owner
      createdAt
      updatedAt
      images {
        items {
          id
          name
          type
          alt
          usage
          title
          url
          identityId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      staffs {
        items {
          id
          name
          career
          message
          usage
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      introductions {
        items {
          id
          title
          description
          usage
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      infoForSearch {
        id
        name
        address
        feature
        symptom
        treatment
        phone
        openTimes
        owner
        createdAt
        updatedAt
      }
      open {
        id
        owner
        createdAt
        updatedAt
        weekPattern {
          nextToken
        }
        weekday {
          nextToken
        }
      }
      info {
        id
        name
        phone
        treatments
        features
        symptoms
        webReserve
        site
        owner
        createdAt
        updatedAt
        premium {
          id
          plan
          owner
          createdAt
          updatedAt
        }
        googleMap {
          id
          lat
          lng
          zoom
          markerLat
          markerLng
          owner
          createdAt
          updatedAt
        }
        nearests {
          nextToken
        }
        address {
          id
          str
          prefecture
          district
          subDistrict
          sourceDistrictId
          sourceSubDistrictId
          owner
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteClinic = /* GraphQL */ `
  mutation DeleteClinic(
    $input: DeleteClinicInput!
    $condition: ModelClinicConditionInput
  ) {
    deleteClinic(input: $input, condition: $condition) {
      id
      name
      owner
      createdAt
      updatedAt
      images {
        items {
          id
          name
          type
          alt
          usage
          title
          url
          identityId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      staffs {
        items {
          id
          name
          career
          message
          usage
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      introductions {
        items {
          id
          title
          description
          usage
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      infoForSearch {
        id
        name
        address
        feature
        symptom
        treatment
        phone
        openTimes
        owner
        createdAt
        updatedAt
      }
      open {
        id
        owner
        createdAt
        updatedAt
        weekPattern {
          nextToken
        }
        weekday {
          nextToken
        }
      }
      info {
        id
        name
        phone
        treatments
        features
        symptoms
        webReserve
        site
        owner
        createdAt
        updatedAt
        premium {
          id
          plan
          owner
          createdAt
          updatedAt
        }
        googleMap {
          id
          lat
          lng
          zoom
          markerLat
          markerLng
          owner
          createdAt
          updatedAt
        }
        nearests {
          nextToken
        }
        address {
          id
          str
          prefecture
          district
          subDistrict
          sourceDistrictId
          sourceSubDistrictId
          owner
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      name
      type
      alt
      usage
      title
      url
      identityId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      name
      type
      alt
      usage
      title
      url
      identityId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      name
      type
      alt
      usage
      title
      url
      identityId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createStaff = /* GraphQL */ `
  mutation CreateStaff(
    $input: CreateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    createStaff(input: $input, condition: $condition) {
      id
      name
      career
      message
      usage
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateStaff = /* GraphQL */ `
  mutation UpdateStaff(
    $input: UpdateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    updateStaff(input: $input, condition: $condition) {
      id
      name
      career
      message
      usage
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteStaff = /* GraphQL */ `
  mutation DeleteStaff(
    $input: DeleteStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    deleteStaff(input: $input, condition: $condition) {
      id
      name
      career
      message
      usage
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createIntroduction = /* GraphQL */ `
  mutation CreateIntroduction(
    $input: CreateIntroductionInput!
    $condition: ModelIntroductionConditionInput
  ) {
    createIntroduction(input: $input, condition: $condition) {
      id
      title
      description
      usage
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateIntroduction = /* GraphQL */ `
  mutation UpdateIntroduction(
    $input: UpdateIntroductionInput!
    $condition: ModelIntroductionConditionInput
  ) {
    updateIntroduction(input: $input, condition: $condition) {
      id
      title
      description
      usage
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteIntroduction = /* GraphQL */ `
  mutation DeleteIntroduction(
    $input: DeleteIntroductionInput!
    $condition: ModelIntroductionConditionInput
  ) {
    deleteIntroduction(input: $input, condition: $condition) {
      id
      title
      description
      usage
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createInfoForSearch = /* GraphQL */ `
  mutation CreateInfoForSearch(
    $input: CreateInfoForSearchInput!
    $condition: ModelInfoForSearchConditionInput
  ) {
    createInfoForSearch(input: $input, condition: $condition) {
      id
      name
      address
      feature
      symptom
      treatment
      phone
      openTimes
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateInfoForSearch = /* GraphQL */ `
  mutation UpdateInfoForSearch(
    $input: UpdateInfoForSearchInput!
    $condition: ModelInfoForSearchConditionInput
  ) {
    updateInfoForSearch(input: $input, condition: $condition) {
      id
      name
      address
      feature
      symptom
      treatment
      phone
      openTimes
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteInfoForSearch = /* GraphQL */ `
  mutation DeleteInfoForSearch(
    $input: DeleteInfoForSearchInput!
    $condition: ModelInfoForSearchConditionInput
  ) {
    deleteInfoForSearch(input: $input, condition: $condition) {
      id
      name
      address
      feature
      symptom
      treatment
      phone
      openTimes
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createOpen = /* GraphQL */ `
  mutation CreateOpen(
    $input: CreateOpenInput!
    $condition: ModelOpenConditionInput
  ) {
    createOpen(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
      weekPattern {
        items {
          id
          pattern
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      weekday {
        items {
          id
          day
          pattern
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateOpen = /* GraphQL */ `
  mutation UpdateOpen(
    $input: UpdateOpenInput!
    $condition: ModelOpenConditionInput
  ) {
    updateOpen(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
      weekPattern {
        items {
          id
          pattern
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      weekday {
        items {
          id
          day
          pattern
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteOpen = /* GraphQL */ `
  mutation DeleteOpen(
    $input: DeleteOpenInput!
    $condition: ModelOpenConditionInput
  ) {
    deleteOpen(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
      weekPattern {
        items {
          id
          pattern
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      weekday {
        items {
          id
          day
          pattern
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createWeekPattern = /* GraphQL */ `
  mutation CreateWeekPattern(
    $input: CreateWeekPatternInput!
    $condition: ModelWeekPatternConditionInput
  ) {
    createWeekPattern(input: $input, condition: $condition) {
      id
      pattern
      owner
      createdAt
      updatedAt
      dayPattern {
        items {
          id
          str
          start
          end
          weekPatternId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateWeekPattern = /* GraphQL */ `
  mutation UpdateWeekPattern(
    $input: UpdateWeekPatternInput!
    $condition: ModelWeekPatternConditionInput
  ) {
    updateWeekPattern(input: $input, condition: $condition) {
      id
      pattern
      owner
      createdAt
      updatedAt
      dayPattern {
        items {
          id
          str
          start
          end
          weekPatternId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteWeekPattern = /* GraphQL */ `
  mutation DeleteWeekPattern(
    $input: DeleteWeekPatternInput!
    $condition: ModelWeekPatternConditionInput
  ) {
    deleteWeekPattern(input: $input, condition: $condition) {
      id
      pattern
      owner
      createdAt
      updatedAt
      dayPattern {
        items {
          id
          str
          start
          end
          weekPatternId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createWeekDay = /* GraphQL */ `
  mutation CreateWeekDay(
    $input: CreateWeekDayInput!
    $condition: ModelWeekDayConditionInput
  ) {
    createWeekDay(input: $input, condition: $condition) {
      id
      day
      pattern
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateWeekDay = /* GraphQL */ `
  mutation UpdateWeekDay(
    $input: UpdateWeekDayInput!
    $condition: ModelWeekDayConditionInput
  ) {
    updateWeekDay(input: $input, condition: $condition) {
      id
      day
      pattern
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteWeekDay = /* GraphQL */ `
  mutation DeleteWeekDay(
    $input: DeleteWeekDayInput!
    $condition: ModelWeekDayConditionInput
  ) {
    deleteWeekDay(input: $input, condition: $condition) {
      id
      day
      pattern
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createDayPattern = /* GraphQL */ `
  mutation CreateDayPattern(
    $input: CreateDayPatternInput!
    $condition: ModelDayPatternConditionInput
  ) {
    createDayPattern(input: $input, condition: $condition) {
      id
      str
      start
      end
      weekPatternId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateDayPattern = /* GraphQL */ `
  mutation UpdateDayPattern(
    $input: UpdateDayPatternInput!
    $condition: ModelDayPatternConditionInput
  ) {
    updateDayPattern(input: $input, condition: $condition) {
      id
      str
      start
      end
      weekPatternId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteDayPattern = /* GraphQL */ `
  mutation DeleteDayPattern(
    $input: DeleteDayPatternInput!
    $condition: ModelDayPatternConditionInput
  ) {
    deleteDayPattern(input: $input, condition: $condition) {
      id
      str
      start
      end
      weekPatternId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createInfo = /* GraphQL */ `
  mutation CreateInfo(
    $input: CreateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    createInfo(input: $input, condition: $condition) {
      id
      name
      phone
      treatments
      features
      symptoms
      webReserve
      site
      owner
      createdAt
      updatedAt
      premium {
        id
        plan
        owner
        createdAt
        updatedAt
      }
      googleMap {
        id
        lat
        lng
        zoom
        markerLat
        markerLng
        owner
        createdAt
        updatedAt
      }
      nearests {
        items {
          id
          str
          company
          route
          station
          sourceStationId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      address {
        id
        str
        prefecture
        district
        subDistrict
        sourceDistrictId
        sourceSubDistrictId
        owner
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateInfo = /* GraphQL */ `
  mutation UpdateInfo(
    $input: UpdateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    updateInfo(input: $input, condition: $condition) {
      id
      name
      phone
      treatments
      features
      symptoms
      webReserve
      site
      owner
      createdAt
      updatedAt
      premium {
        id
        plan
        owner
        createdAt
        updatedAt
      }
      googleMap {
        id
        lat
        lng
        zoom
        markerLat
        markerLng
        owner
        createdAt
        updatedAt
      }
      nearests {
        items {
          id
          str
          company
          route
          station
          sourceStationId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      address {
        id
        str
        prefecture
        district
        subDistrict
        sourceDistrictId
        sourceSubDistrictId
        owner
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteInfo = /* GraphQL */ `
  mutation DeleteInfo(
    $input: DeleteInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    deleteInfo(input: $input, condition: $condition) {
      id
      name
      phone
      treatments
      features
      symptoms
      webReserve
      site
      owner
      createdAt
      updatedAt
      premium {
        id
        plan
        owner
        createdAt
        updatedAt
      }
      googleMap {
        id
        lat
        lng
        zoom
        markerLat
        markerLng
        owner
        createdAt
        updatedAt
      }
      nearests {
        items {
          id
          str
          company
          route
          station
          sourceStationId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      address {
        id
        str
        prefecture
        district
        subDistrict
        sourceDistrictId
        sourceSubDistrictId
        owner
        createdAt
        updatedAt
      }
    }
  }
`;
export const createPremium = /* GraphQL */ `
  mutation CreatePremium(
    $input: CreatePremiumInput!
    $condition: ModelPremiumConditionInput
  ) {
    createPremium(input: $input, condition: $condition) {
      id
      plan
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updatePremium = /* GraphQL */ `
  mutation UpdatePremium(
    $input: UpdatePremiumInput!
    $condition: ModelPremiumConditionInput
  ) {
    updatePremium(input: $input, condition: $condition) {
      id
      plan
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deletePremium = /* GraphQL */ `
  mutation DeletePremium(
    $input: DeletePremiumInput!
    $condition: ModelPremiumConditionInput
  ) {
    deletePremium(input: $input, condition: $condition) {
      id
      plan
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createGoogleMap = /* GraphQL */ `
  mutation CreateGoogleMap(
    $input: CreateGoogleMapInput!
    $condition: ModelGoogleMapConditionInput
  ) {
    createGoogleMap(input: $input, condition: $condition) {
      id
      lat
      lng
      zoom
      markerLat
      markerLng
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateGoogleMap = /* GraphQL */ `
  mutation UpdateGoogleMap(
    $input: UpdateGoogleMapInput!
    $condition: ModelGoogleMapConditionInput
  ) {
    updateGoogleMap(input: $input, condition: $condition) {
      id
      lat
      lng
      zoom
      markerLat
      markerLng
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteGoogleMap = /* GraphQL */ `
  mutation DeleteGoogleMap(
    $input: DeleteGoogleMapInput!
    $condition: ModelGoogleMapConditionInput
  ) {
    deleteGoogleMap(input: $input, condition: $condition) {
      id
      lat
      lng
      zoom
      markerLat
      markerLng
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createNearests = /* GraphQL */ `
  mutation CreateNearests(
    $input: CreateNearestsInput!
    $condition: ModelNearestsConditionInput
  ) {
    createNearests(input: $input, condition: $condition) {
      id
      str
      company
      route
      station
      sourceStationId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateNearests = /* GraphQL */ `
  mutation UpdateNearests(
    $input: UpdateNearestsInput!
    $condition: ModelNearestsConditionInput
  ) {
    updateNearests(input: $input, condition: $condition) {
      id
      str
      company
      route
      station
      sourceStationId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteNearests = /* GraphQL */ `
  mutation DeleteNearests(
    $input: DeleteNearestsInput!
    $condition: ModelNearestsConditionInput
  ) {
    deleteNearests(input: $input, condition: $condition) {
      id
      str
      company
      route
      station
      sourceStationId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      str
      prefecture
      district
      subDistrict
      sourceDistrictId
      sourceSubDistrictId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      str
      prefecture
      district
      subDistrict
      sourceDistrictId
      sourceSubDistrictId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      str
      prefecture
      district
      subDistrict
      sourceDistrictId
      sourceSubDistrictId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createSourceSymptoms = /* GraphQL */ `
  mutation CreateSourceSymptoms(
    $input: CreateSourceSymptomsInput!
    $condition: ModelSourceSymptomsConditionInput
  ) {
    createSourceSymptoms(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateSourceSymptoms = /* GraphQL */ `
  mutation UpdateSourceSymptoms(
    $input: UpdateSourceSymptomsInput!
    $condition: ModelSourceSymptomsConditionInput
  ) {
    updateSourceSymptoms(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteSourceSymptoms = /* GraphQL */ `
  mutation DeleteSourceSymptoms(
    $input: DeleteSourceSymptomsInput!
    $condition: ModelSourceSymptomsConditionInput
  ) {
    deleteSourceSymptoms(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createSourceFeatures = /* GraphQL */ `
  mutation CreateSourceFeatures(
    $input: CreateSourceFeaturesInput!
    $condition: ModelSourceFeaturesConditionInput
  ) {
    createSourceFeatures(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateSourceFeatures = /* GraphQL */ `
  mutation UpdateSourceFeatures(
    $input: UpdateSourceFeaturesInput!
    $condition: ModelSourceFeaturesConditionInput
  ) {
    updateSourceFeatures(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteSourceFeatures = /* GraphQL */ `
  mutation DeleteSourceFeatures(
    $input: DeleteSourceFeaturesInput!
    $condition: ModelSourceFeaturesConditionInput
  ) {
    deleteSourceFeatures(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createSourceTreatments = /* GraphQL */ `
  mutation CreateSourceTreatments(
    $input: CreateSourceTreatmentsInput!
    $condition: ModelSourceTreatmentsConditionInput
  ) {
    createSourceTreatments(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateSourceTreatments = /* GraphQL */ `
  mutation UpdateSourceTreatments(
    $input: UpdateSourceTreatmentsInput!
    $condition: ModelSourceTreatmentsConditionInput
  ) {
    updateSourceTreatments(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteSourceTreatments = /* GraphQL */ `
  mutation DeleteSourceTreatments(
    $input: DeleteSourceTreatmentsInput!
    $condition: ModelSourceTreatmentsConditionInput
  ) {
    deleteSourceTreatments(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createSourceRoute = /* GraphQL */ `
  mutation CreateSourceRoute(
    $input: CreateSourceRouteInput!
    $condition: ModelSourceRouteConditionInput
  ) {
    createSourceRoute(input: $input, condition: $condition) {
      id
      name
      company
      stations {
        items {
          id
          name
          sourceRouteId
          createdAt
          updatedAt
        }
        nextToken
      }
      routeId
      createdAt
      updatedAt
    }
  }
`;
export const updateSourceRoute = /* GraphQL */ `
  mutation UpdateSourceRoute(
    $input: UpdateSourceRouteInput!
    $condition: ModelSourceRouteConditionInput
  ) {
    updateSourceRoute(input: $input, condition: $condition) {
      id
      name
      company
      stations {
        items {
          id
          name
          sourceRouteId
          createdAt
          updatedAt
        }
        nextToken
      }
      routeId
      createdAt
      updatedAt
    }
  }
`;
export const deleteSourceRoute = /* GraphQL */ `
  mutation DeleteSourceRoute(
    $input: DeleteSourceRouteInput!
    $condition: ModelSourceRouteConditionInput
  ) {
    deleteSourceRoute(input: $input, condition: $condition) {
      id
      name
      company
      stations {
        items {
          id
          name
          sourceRouteId
          createdAt
          updatedAt
        }
        nextToken
      }
      routeId
      createdAt
      updatedAt
    }
  }
`;
export const createSourceStation = /* GraphQL */ `
  mutation CreateSourceStation(
    $input: CreateSourceStationInput!
    $condition: ModelSourceStationConditionInput
  ) {
    createSourceStation(input: $input, condition: $condition) {
      id
      name
      sourceRouteId
      createdAt
      updatedAt
    }
  }
`;
export const updateSourceStation = /* GraphQL */ `
  mutation UpdateSourceStation(
    $input: UpdateSourceStationInput!
    $condition: ModelSourceStationConditionInput
  ) {
    updateSourceStation(input: $input, condition: $condition) {
      id
      name
      sourceRouteId
      createdAt
      updatedAt
    }
  }
`;
export const deleteSourceStation = /* GraphQL */ `
  mutation DeleteSourceStation(
    $input: DeleteSourceStationInput!
    $condition: ModelSourceStationConditionInput
  ) {
    deleteSourceStation(input: $input, condition: $condition) {
      id
      name
      sourceRouteId
      createdAt
      updatedAt
    }
  }
`;
export const createSourcePrefecture = /* GraphQL */ `
  mutation CreateSourcePrefecture(
    $input: CreateSourcePrefectureInput!
    $condition: ModelSourcePrefectureConditionInput
  ) {
    createSourcePrefecture(input: $input, condition: $condition) {
      id
      name
      districts {
        items {
          id
          name
          existSubDistrict
          sourcePrefectureId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSourcePrefecture = /* GraphQL */ `
  mutation UpdateSourcePrefecture(
    $input: UpdateSourcePrefectureInput!
    $condition: ModelSourcePrefectureConditionInput
  ) {
    updateSourcePrefecture(input: $input, condition: $condition) {
      id
      name
      districts {
        items {
          id
          name
          existSubDistrict
          sourcePrefectureId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSourcePrefecture = /* GraphQL */ `
  mutation DeleteSourcePrefecture(
    $input: DeleteSourcePrefectureInput!
    $condition: ModelSourcePrefectureConditionInput
  ) {
    deleteSourcePrefecture(input: $input, condition: $condition) {
      id
      name
      districts {
        items {
          id
          name
          existSubDistrict
          sourcePrefectureId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSourceDistrict = /* GraphQL */ `
  mutation CreateSourceDistrict(
    $input: CreateSourceDistrictInput!
    $condition: ModelSourceDistrictConditionInput
  ) {
    createSourceDistrict(input: $input, condition: $condition) {
      id
      name
      existSubDistrict
      subDistrict {
        items {
          id
          name
          sourceDistrictId
          createdAt
          updatedAt
        }
        nextToken
      }
      sourcePrefectureId
      createdAt
      updatedAt
    }
  }
`;
export const updateSourceDistrict = /* GraphQL */ `
  mutation UpdateSourceDistrict(
    $input: UpdateSourceDistrictInput!
    $condition: ModelSourceDistrictConditionInput
  ) {
    updateSourceDistrict(input: $input, condition: $condition) {
      id
      name
      existSubDistrict
      subDistrict {
        items {
          id
          name
          sourceDistrictId
          createdAt
          updatedAt
        }
        nextToken
      }
      sourcePrefectureId
      createdAt
      updatedAt
    }
  }
`;
export const deleteSourceDistrict = /* GraphQL */ `
  mutation DeleteSourceDistrict(
    $input: DeleteSourceDistrictInput!
    $condition: ModelSourceDistrictConditionInput
  ) {
    deleteSourceDistrict(input: $input, condition: $condition) {
      id
      name
      existSubDistrict
      subDistrict {
        items {
          id
          name
          sourceDistrictId
          createdAt
          updatedAt
        }
        nextToken
      }
      sourcePrefectureId
      createdAt
      updatedAt
    }
  }
`;
export const createSourceSubDistrict = /* GraphQL */ `
  mutation CreateSourceSubDistrict(
    $input: CreateSourceSubDistrictInput!
    $condition: ModelSourceSubDistrictConditionInput
  ) {
    createSourceSubDistrict(input: $input, condition: $condition) {
      id
      name
      sourceDistrictId
      createdAt
      updatedAt
    }
  }
`;
export const updateSourceSubDistrict = /* GraphQL */ `
  mutation UpdateSourceSubDistrict(
    $input: UpdateSourceSubDistrictInput!
    $condition: ModelSourceSubDistrictConditionInput
  ) {
    updateSourceSubDistrict(input: $input, condition: $condition) {
      id
      name
      sourceDistrictId
      createdAt
      updatedAt
    }
  }
`;
export const deleteSourceSubDistrict = /* GraphQL */ `
  mutation DeleteSourceSubDistrict(
    $input: DeleteSourceSubDistrictInput!
    $condition: ModelSourceSubDistrictConditionInput
  ) {
    deleteSourceSubDistrict(input: $input, condition: $condition) {
      id
      name
      sourceDistrictId
      createdAt
      updatedAt
    }
  }
`;
