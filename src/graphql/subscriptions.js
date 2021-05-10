/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSourceSymptoms = /* GraphQL */ `
  subscription OnCreateSourceSymptoms {
    onCreateSourceSymptoms {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSourceSymptoms = /* GraphQL */ `
  subscription OnUpdateSourceSymptoms {
    onUpdateSourceSymptoms {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSourceSymptoms = /* GraphQL */ `
  subscription OnDeleteSourceSymptoms {
    onDeleteSourceSymptoms {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSourceFeatures = /* GraphQL */ `
  subscription OnCreateSourceFeatures {
    onCreateSourceFeatures {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSourceFeatures = /* GraphQL */ `
  subscription OnUpdateSourceFeatures {
    onUpdateSourceFeatures {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSourceFeatures = /* GraphQL */ `
  subscription OnDeleteSourceFeatures {
    onDeleteSourceFeatures {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSourceTreatments = /* GraphQL */ `
  subscription OnCreateSourceTreatments {
    onCreateSourceTreatments {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSourceTreatments = /* GraphQL */ `
  subscription OnUpdateSourceTreatments {
    onUpdateSourceTreatments {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSourceTreatments = /* GraphQL */ `
  subscription OnDeleteSourceTreatments {
    onDeleteSourceTreatments {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSourceRoute = /* GraphQL */ `
  subscription OnCreateSourceRoute {
    onCreateSourceRoute {
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
export const onUpdateSourceRoute = /* GraphQL */ `
  subscription OnUpdateSourceRoute {
    onUpdateSourceRoute {
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
export const onDeleteSourceRoute = /* GraphQL */ `
  subscription OnDeleteSourceRoute {
    onDeleteSourceRoute {
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
export const onCreateSourceStation = /* GraphQL */ `
  subscription OnCreateSourceStation {
    onCreateSourceStation {
      id
      name
      sourceRouteId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSourceStation = /* GraphQL */ `
  subscription OnUpdateSourceStation {
    onUpdateSourceStation {
      id
      name
      sourceRouteId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSourceStation = /* GraphQL */ `
  subscription OnDeleteSourceStation {
    onDeleteSourceStation {
      id
      name
      sourceRouteId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSourcePrefecture = /* GraphQL */ `
  subscription OnCreateSourcePrefecture {
    onCreateSourcePrefecture {
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
export const onUpdateSourcePrefecture = /* GraphQL */ `
  subscription OnUpdateSourcePrefecture {
    onUpdateSourcePrefecture {
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
export const onDeleteSourcePrefecture = /* GraphQL */ `
  subscription OnDeleteSourcePrefecture {
    onDeleteSourcePrefecture {
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
export const onCreateSourceDistrict = /* GraphQL */ `
  subscription OnCreateSourceDistrict {
    onCreateSourceDistrict {
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
export const onUpdateSourceDistrict = /* GraphQL */ `
  subscription OnUpdateSourceDistrict {
    onUpdateSourceDistrict {
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
export const onDeleteSourceDistrict = /* GraphQL */ `
  subscription OnDeleteSourceDistrict {
    onDeleteSourceDistrict {
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
export const onCreateSourceSubDistrict = /* GraphQL */ `
  subscription OnCreateSourceSubDistrict {
    onCreateSourceSubDistrict {
      id
      name
      sourceDistrictId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSourceSubDistrict = /* GraphQL */ `
  subscription OnUpdateSourceSubDistrict {
    onUpdateSourceSubDistrict {
      id
      name
      sourceDistrictId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSourceSubDistrict = /* GraphQL */ `
  subscription OnDeleteSourceSubDistrict {
    onDeleteSourceSubDistrict {
      id
      name
      sourceDistrictId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClinic = /* GraphQL */ `
  subscription OnCreateClinic($owner: String) {
    onCreateClinic(owner: $owner) {
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
export const onUpdateClinic = /* GraphQL */ `
  subscription OnUpdateClinic($owner: String) {
    onUpdateClinic(owner: $owner) {
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
export const onDeleteClinic = /* GraphQL */ `
  subscription OnDeleteClinic($owner: String) {
    onDeleteClinic(owner: $owner) {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($owner: String) {
    onCreateImage(owner: $owner) {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($owner: String) {
    onUpdateImage(owner: $owner) {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($owner: String) {
    onDeleteImage(owner: $owner) {
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
export const onCreateStaff = /* GraphQL */ `
  subscription OnCreateStaff($owner: String) {
    onCreateStaff(owner: $owner) {
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
export const onUpdateStaff = /* GraphQL */ `
  subscription OnUpdateStaff($owner: String) {
    onUpdateStaff(owner: $owner) {
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
export const onDeleteStaff = /* GraphQL */ `
  subscription OnDeleteStaff($owner: String) {
    onDeleteStaff(owner: $owner) {
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
export const onCreateIntroduction = /* GraphQL */ `
  subscription OnCreateIntroduction($owner: String) {
    onCreateIntroduction(owner: $owner) {
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
export const onUpdateIntroduction = /* GraphQL */ `
  subscription OnUpdateIntroduction($owner: String) {
    onUpdateIntroduction(owner: $owner) {
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
export const onDeleteIntroduction = /* GraphQL */ `
  subscription OnDeleteIntroduction($owner: String) {
    onDeleteIntroduction(owner: $owner) {
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
export const onCreateInfoForSearch = /* GraphQL */ `
  subscription OnCreateInfoForSearch($owner: String) {
    onCreateInfoForSearch(owner: $owner) {
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
export const onUpdateInfoForSearch = /* GraphQL */ `
  subscription OnUpdateInfoForSearch($owner: String) {
    onUpdateInfoForSearch(owner: $owner) {
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
export const onDeleteInfoForSearch = /* GraphQL */ `
  subscription OnDeleteInfoForSearch($owner: String) {
    onDeleteInfoForSearch(owner: $owner) {
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
export const onCreateOpen = /* GraphQL */ `
  subscription OnCreateOpen($owner: String) {
    onCreateOpen(owner: $owner) {
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
export const onUpdateOpen = /* GraphQL */ `
  subscription OnUpdateOpen($owner: String) {
    onUpdateOpen(owner: $owner) {
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
export const onDeleteOpen = /* GraphQL */ `
  subscription OnDeleteOpen($owner: String) {
    onDeleteOpen(owner: $owner) {
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
export const onCreateWeekPattern = /* GraphQL */ `
  subscription OnCreateWeekPattern($owner: String) {
    onCreateWeekPattern(owner: $owner) {
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
export const onUpdateWeekPattern = /* GraphQL */ `
  subscription OnUpdateWeekPattern($owner: String) {
    onUpdateWeekPattern(owner: $owner) {
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
export const onDeleteWeekPattern = /* GraphQL */ `
  subscription OnDeleteWeekPattern($owner: String) {
    onDeleteWeekPattern(owner: $owner) {
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
export const onCreateWeekDay = /* GraphQL */ `
  subscription OnCreateWeekDay($owner: String) {
    onCreateWeekDay(owner: $owner) {
      id
      day
      pattern
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWeekDay = /* GraphQL */ `
  subscription OnUpdateWeekDay($owner: String) {
    onUpdateWeekDay(owner: $owner) {
      id
      day
      pattern
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWeekDay = /* GraphQL */ `
  subscription OnDeleteWeekDay($owner: String) {
    onDeleteWeekDay(owner: $owner) {
      id
      day
      pattern
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDayPattern = /* GraphQL */ `
  subscription OnCreateDayPattern($owner: String) {
    onCreateDayPattern(owner: $owner) {
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
export const onUpdateDayPattern = /* GraphQL */ `
  subscription OnUpdateDayPattern($owner: String) {
    onUpdateDayPattern(owner: $owner) {
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
export const onDeleteDayPattern = /* GraphQL */ `
  subscription OnDeleteDayPattern($owner: String) {
    onDeleteDayPattern(owner: $owner) {
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
export const onCreateInfo = /* GraphQL */ `
  subscription OnCreateInfo($owner: String) {
    onCreateInfo(owner: $owner) {
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
export const onUpdateInfo = /* GraphQL */ `
  subscription OnUpdateInfo($owner: String) {
    onUpdateInfo(owner: $owner) {
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
export const onDeleteInfo = /* GraphQL */ `
  subscription OnDeleteInfo($owner: String) {
    onDeleteInfo(owner: $owner) {
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
export const onCreatePremium = /* GraphQL */ `
  subscription OnCreatePremium($owner: String) {
    onCreatePremium(owner: $owner) {
      id
      plan
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePremium = /* GraphQL */ `
  subscription OnUpdatePremium($owner: String) {
    onUpdatePremium(owner: $owner) {
      id
      plan
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePremium = /* GraphQL */ `
  subscription OnDeletePremium($owner: String) {
    onDeletePremium(owner: $owner) {
      id
      plan
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGoogleMap = /* GraphQL */ `
  subscription OnCreateGoogleMap($owner: String) {
    onCreateGoogleMap(owner: $owner) {
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
export const onUpdateGoogleMap = /* GraphQL */ `
  subscription OnUpdateGoogleMap($owner: String) {
    onUpdateGoogleMap(owner: $owner) {
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
export const onDeleteGoogleMap = /* GraphQL */ `
  subscription OnDeleteGoogleMap($owner: String) {
    onDeleteGoogleMap(owner: $owner) {
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
export const onCreateNearests = /* GraphQL */ `
  subscription OnCreateNearests($owner: String) {
    onCreateNearests(owner: $owner) {
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
export const onUpdateNearests = /* GraphQL */ `
  subscription OnUpdateNearests($owner: String) {
    onUpdateNearests(owner: $owner) {
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
export const onDeleteNearests = /* GraphQL */ `
  subscription OnDeleteNearests($owner: String) {
    onDeleteNearests(owner: $owner) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String) {
    onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String) {
    onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String) {
    onDeleteAddress(owner: $owner) {
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
