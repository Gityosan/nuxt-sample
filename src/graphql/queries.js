/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSourceSymptoms = /* GraphQL */ `
  query GetSourceSymptoms($id: ID!) {
    getSourceSymptoms(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listSourceSymptomss = /* GraphQL */ `
  query ListSourceSymptomss(
    $filter: ModelSourceSymptomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSourceSymptomss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSourceFeatures = /* GraphQL */ `
  query GetSourceFeatures($id: ID!) {
    getSourceFeatures(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listSourceFeaturess = /* GraphQL */ `
  query ListSourceFeaturess(
    $filter: ModelSourceFeaturesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSourceFeaturess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSourceTreatments = /* GraphQL */ `
  query GetSourceTreatments($id: ID!) {
    getSourceTreatments(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listSourceTreatmentss = /* GraphQL */ `
  query ListSourceTreatmentss(
    $filter: ModelSourceTreatmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSourceTreatmentss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSourceRoute = /* GraphQL */ `
  query GetSourceRoute($id: ID!) {
    getSourceRoute(id: $id) {
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
export const listSourceRoutes = /* GraphQL */ `
  query ListSourceRoutes(
    $filter: ModelSourceRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSourceRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        company
        stations {
          nextToken
        }
        routeId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSourceStation = /* GraphQL */ `
  query GetSourceStation($id: ID!) {
    getSourceStation(id: $id) {
      id
      name
      sourceRouteId
      createdAt
      updatedAt
    }
  }
`;
export const listSourceStations = /* GraphQL */ `
  query ListSourceStations(
    $id: ID
    $filter: ModelSourceStationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSourceStations(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        sourceRouteId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSourcePrefecture = /* GraphQL */ `
  query GetSourcePrefecture($id: ID!) {
    getSourcePrefecture(id: $id) {
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
export const listSourcePrefectures = /* GraphQL */ `
  query ListSourcePrefectures(
    $filter: ModelSourcePrefectureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSourcePrefectures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        districts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSourceDistrict = /* GraphQL */ `
  query GetSourceDistrict($id: ID!) {
    getSourceDistrict(id: $id) {
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
export const listSourceDistricts = /* GraphQL */ `
  query ListSourceDistricts(
    $filter: ModelSourceDistrictFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSourceDistricts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        existSubDistrict
        subDistrict {
          nextToken
        }
        sourcePrefectureId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSourceSubDistrict = /* GraphQL */ `
  query GetSourceSubDistrict($id: ID!) {
    getSourceSubDistrict(id: $id) {
      id
      name
      sourceDistrictId
      createdAt
      updatedAt
    }
  }
`;
export const listSourceSubDistricts = /* GraphQL */ `
  query ListSourceSubDistricts(
    $filter: ModelSourceSubDistrictFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSourceSubDistricts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        sourceDistrictId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listSourceStationById = /* GraphQL */ `
  query ListSourceStationById(
    $sourceRouteId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSourceStationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSourceStationById(
      sourceRouteId: $sourceRouteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        sourceRouteId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClinic = /* GraphQL */ `
  query GetClinic($owner: ID!) {
    getClinic(owner: $owner) {
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
export const listClinics = /* GraphQL */ `
  query ListClinics(
    $owner: ID
    $filter: ModelClinicFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listClinics(
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        owner
        createdAt
        updatedAt
        images {
          nextToken
        }
        staffs {
          nextToken
        }
        introductions {
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
        }
      }
      nextToken
    }
  }
`;
export const listClinicsByName = /* GraphQL */ `
  query ListClinicsByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelClinicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClinicsByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        owner
        createdAt
        updatedAt
        images {
          nextToken
        }
        staffs {
          nextToken
        }
        introductions {
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
        }
      }
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const listImagesByIdentityId = /* GraphQL */ `
  query ListImagesByIdentityId(
    $identityId: String
    $sortDirection: ModelSortDirection
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagesByIdentityId(
      identityId: $identityId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const imageByUsage = /* GraphQL */ `
  query ImageByUsage(
    $usage: ImageUsage
    $owner: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ImageByUsage(
      usage: $usage
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getStaff = /* GraphQL */ `
  query GetStaff($id: ID!) {
    getStaff(id: $id) {
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
export const listStaffs = /* GraphQL */ `
  query ListStaffs(
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const staffByUsage = /* GraphQL */ `
  query StaffByUsage(
    $usage: StaffUsage
    $owner: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    StaffByUsage(
      usage: $usage
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getIntroduction = /* GraphQL */ `
  query GetIntroduction($id: ID!) {
    getIntroduction(id: $id) {
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
export const listIntroductions = /* GraphQL */ `
  query ListIntroductions(
    $filter: ModelIntroductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIntroductions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const listIntroductionById = /* GraphQL */ `
  query ListIntroductionById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelIntroductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIntroductionById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const introductionByUsage = /* GraphQL */ `
  query IntroductionByUsage(
    $usage: IntroductionUsage
    $owner: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIntroductionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    IntroductionByUsage(
      usage: $usage
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const listInfoForSearchs = /* GraphQL */ `
  query ListInfoForSearchs(
    $owner: ID
    $filter: ModelInfoForSearchFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInfoForSearchs(
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getInfoForSearch = /* GraphQL */ `
  query GetInfoForSearch($owner: ID!) {
    getInfoForSearch(owner: $owner) {
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
export const listInfoForSearchById = /* GraphQL */ `
  query ListInfoForSearchById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelInfoForSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfoForSearchById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchInfoForSearchs = /* GraphQL */ `
  query SearchInfoForSearchs(
    $filter: SearchableInfoForSearchFilterInput
    $sort: SearchableInfoForSearchSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchInfoForSearchs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const listOpens = /* GraphQL */ `
  query ListOpens(
    $owner: ID
    $filter: ModelOpenFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOpens(
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getOpen = /* GraphQL */ `
  query GetOpen($owner: ID!) {
    getOpen(owner: $owner) {
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
export const listOpenById = /* GraphQL */ `
  query ListOpenById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOpenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpenById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getWeekPattern = /* GraphQL */ `
  query GetWeekPattern($id: ID!) {
    getWeekPattern(id: $id) {
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
export const listWeekPatterns = /* GraphQL */ `
  query ListWeekPatterns(
    $id: ID
    $filter: ModelWeekPatternFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWeekPatterns(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        pattern
        owner
        createdAt
        updatedAt
        dayPattern {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listWeekPatternsByOwner = /* GraphQL */ `
  query ListWeekPatternsByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelWeekPatternFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeekPatternsByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pattern
        owner
        createdAt
        updatedAt
        dayPattern {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const weekPatternByPattern = /* GraphQL */ `
  query WeekPatternByPattern(
    $owner: ID
    $pattern: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWeekPatternFilterInput
    $limit: Int
    $nextToken: String
  ) {
    WeekPatternByPattern(
      owner: $owner
      pattern: $pattern
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pattern
        owner
        createdAt
        updatedAt
        dayPattern {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getWeekDay = /* GraphQL */ `
  query GetWeekDay($id: ID!) {
    getWeekDay(id: $id) {
      id
      day
      pattern
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listWeekDays = /* GraphQL */ `
  query ListWeekDays(
    $id: ID
    $filter: ModelWeekDayFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWeekDays(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
`;
export const listWeekDaysByOwner = /* GraphQL */ `
  query ListWeekDaysByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelWeekDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeekDaysByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const weekDayByPattern = /* GraphQL */ `
  query WeekDayByPattern(
    $owner: ID
    $pattern: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWeekDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    WeekDayByPattern(
      owner: $owner
      pattern: $pattern
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const getDayPattern = /* GraphQL */ `
  query GetDayPattern($id: ID!) {
    getDayPattern(id: $id) {
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
export const listDayPatterns = /* GraphQL */ `
  query ListDayPatterns(
    $id: ID
    $filter: ModelDayPatternFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDayPatterns(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
`;
export const listDayPatternsByOwner = /* GraphQL */ `
  query ListDayPatternsByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelDayPatternFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDayPatternsByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const listInfos = /* GraphQL */ `
  query ListInfos(
    $owner: ID
    $filter: ModelInfoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInfos(
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getInfo = /* GraphQL */ `
  query GetInfo($owner: ID!) {
    getInfo(owner: $owner) {
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
export const listInfoById = /* GraphQL */ `
  query ListInfoById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfoById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listPremiums = /* GraphQL */ `
  query ListPremiums(
    $owner: ID
    $filter: ModelPremiumFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPremiums(
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        plan
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPremium = /* GraphQL */ `
  query GetPremium($owner: ID!) {
    getPremium(owner: $owner) {
      id
      plan
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listPremiumById = /* GraphQL */ `
  query ListPremiumById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPremiumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPremiumById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        plan
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPremiumByPlan = /* GraphQL */ `
  query ListPremiumByPlan(
    $plan: PlanGrade
    $sortDirection: ModelSortDirection
    $filter: ModelPremiumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPremiumByPlan(
      plan: $plan
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        plan
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listGoogleMaps = /* GraphQL */ `
  query ListGoogleMaps(
    $owner: ID
    $filter: ModelGoogleMapFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGoogleMaps(
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getGoogleMap = /* GraphQL */ `
  query GetGoogleMap($owner: ID!) {
    getGoogleMap(owner: $owner) {
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
export const listGoogleMapById = /* GraphQL */ `
  query ListGoogleMapById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelGoogleMapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoogleMapById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getNearests = /* GraphQL */ `
  query GetNearests($id: ID!) {
    getNearests(id: $id) {
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
export const listNearestss = /* GraphQL */ `
  query ListNearestss(
    $id: ID
    $filter: ModelNearestsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNearestss(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const listNearestssByOwner = /* GraphQL */ `
  query ListNearestssByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelNearestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNearestssByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $owner: ID
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAddresss(
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($owner: ID!) {
    getAddress(owner: $owner) {
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
export const listAddressById = /* GraphQL */ `
  query ListAddressById(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddressById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
