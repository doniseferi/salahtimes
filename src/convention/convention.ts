import { AngularDegrees, degrees } from '../maths'
import { Either } from '../either'

type SupportedConventions = 'MuslimWorldLeague' | 'IslamicSocietyOfNorthAmerica' | 'EgyptianGeneralAuthorityOfSurvey' | 'UmmAlQuraUniversityMekkah' | 'UniversityOfIslamicSciencesKarachi' | 'InstituteOfGeophysicsUniversityOfTehranOfSurvey' | 'ShiaIthnaAshariLevaResearchInstituteQumOfSurvey'

interface Convention {
  fajr(): Either<RangeError, Readonly<AngularDegrees>>
  isha(): Either<RangeError, Readonly<AngularDegrees>>
}

const conventions: Array<{ name: string, value: Convention }> = [{
  name: 'muslimWorldLeague',
  value: {
    fajr: () => degrees(18),
    isha: () => degrees(17)
  }
},
{
  name: 'islamicSocietyOfNorthAmerica',
  value: {
    fajr: () => degrees(15),
    isha: () => degrees(15)
  }
}, {
  name: 'egyptianGeneralAuthorityOfSurvey',
  value: {
    fajr: () => degrees(19.5),
    isha: () => degrees(17.5)
  }
}, {
  name: 'ummAlQuraUniversityMekkah',
  value: {
    fajr: () => degrees(18.5),
    isha: () => degrees(22.5)
  }
}, {
  name: 'universityOfIslamicSciencesKarachi',
  value: {
    fajr: () => degrees(18),
    isha: () => degrees(18)
  }
}, {
  name: 'instituteOfGeophysicsUniversityOfTehranOfSurvey',
  value: {
    fajr: () => degrees(17.7),
    isha: () => degrees(14)
  }
}, {
  name: 'shiaIthnaAshariLevaResearchInstituteQumOfSurvey',
  value: {
    fajr: () => degrees(16),
    isha: () => degrees(14)
  }
}]

const convention =
  (name: SupportedConventions = 'MuslimWorldLeague'): Convention =>
    conventions
      .find(convention =>
        convention.name.toLowerCase() === name?.toLowerCase())
      ?.value ?? conventions[0].value

export default convention
