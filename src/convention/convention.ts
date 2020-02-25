import { Degree, degree } from '../maths'
import { Either } from '../either'

type ConventionName = 'MuslimWorldLeague' | 'IslamicSocietyOfNorthAmerica' | 'EgyptianGeneralAuthorityOfSurvey' | 'UmmAlQuraUniversityMekkah' | 'UniversityOfIslamicSciencesKarachi' | 'InstituteOfGeophysicsUniversityOfTehranOfSurvey' | 'ShiaIthnaAshariLevaResearchInstituteQumOfSurvey'

interface Convention {
  fajr(): Either<RangeError, Readonly<Degree>>
  isha(): Either<RangeError, Readonly<Degree>>
}

interface Conventions {
  name: string
  value: Convention
};

const conventions: Conventions[] = [{
  name: 'muslimWorldLeague',
  value: {
    fajr: () => degree(18),
    isha: () => degree(17)
  }
},
{
  name: 'islamicSocietyOfNorthAmerica',
  value: {
    fajr: () => degree(15),
    isha: () => degree(15)
  }
}, {
  name: 'egyptianGeneralAuthorityOfSurvey',
  value: {
    fajr: () => degree(19.5),
    isha: () => degree(17.5)
  }
}, {
  name: 'ummAlQuraUniversityMekkah',
  value: {
    fajr: () => degree(18.5),
    isha: () => degree(22.5)
  }
}, {
  name: 'universityOfIslamicSciencesKarachi',
  value: {
    fajr: () => degree(18),
    isha: () => degree(18)
  }
}, {
  name: 'instituteOfGeophysicsUniversityOfTehranOfSurvey',
  value: {
    fajr: () => degree(17.7),
    isha: () => degree(14)
  }
}, {
  name: 'shiaIthnaAshariLevaResearchInstituteQumOfSurvey',
  value: {
    fajr: () => degree(16),
    isha: () => degree(14)
  }
}]

const convention = (name?: ConventionName): Convention => conventions.find(x => x.name.toLowerCase() === (name?.toLowerCase()))?.value ?? conventions[0].value

export default convention
