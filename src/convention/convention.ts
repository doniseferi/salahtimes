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

const conventions = (): Conventions[] => [{
  name: 'dafault',
  value: {
    fajr: () => degree(0),
    isha: () => degree(0)
  }
},
{
  name: 'muslimWorldLeague',
  value: {
    fajr: () => degree(0),
    isha: () => degree(0)
  }
},
{
  name: 'islamicSocietyOfNorthAmerica',
  value: {
    fajr: () => degree(0),
    isha: () => degree(0)
  }
}, {
  name: 'egyptianGeneralAuthorityOfSurvey',
  value: {
    fajr: () => degree(0),
    isha: () => degree(0)
  }
}, {
  name: 'ummAlQuraUniversityMekkah',
  value: {
    fajr: () => degree(0),
    isha: () => degree(0)
  }
}, {
  name: 'universityOfIslamicSciencesKarachi',
  value: {
    fajr: () => degree(0),
    isha: () => degree(0)
  }
}, {
  name: 'instituteOfGeophysicsUniversityOfTehranOfSurvey',
  value: {
    fajr: () => degree(0),
    isha: () => degree(0)
  }
}, {
  name: 'shiaIthnaAshariLevaResearchInstituteQumOfSurvey',
  value: {
    fajr: () => degree(0),
    isha: () => degree(0)
  }
}]

const convention = (name?: ConventionName): Convention => conventions().find(x => x.name.toLowerCase() === (name?.toLowerCase()))?.value ?? conventions()[0].value

export default convention
