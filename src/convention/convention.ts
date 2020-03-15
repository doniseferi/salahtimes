import { AngularDegrees, degrees } from '../maths'
import { throwOnError } from '../either'

type SupportedConventions =
  'MuslimWorldLeague' |
  'IslamicSocietyOfNorthAmerica' |
  'EgyptianGeneralAuthorityOfSurvey' |
  'UmmAlQuraUniversityMekkah' |
  'UniversityOfIslamicSciencesKarachi' |
  'InstituteOfGeophysicsUniversityOfTehranOfSurvey' |
  'ShiaIthnaAshariLevaResearchInstituteQumOfSurvey'

interface Convention {
  name: SupportedConventions
  fajr: Readonly<AngularDegrees>
  isha: Readonly<AngularDegrees>
}

const conventions: Convention[] = [{
  name: 'MuslimWorldLeague',
  fajr: throwOnError(degrees(18)),
  isha: throwOnError(degrees(17))
},
{
  name: 'IslamicSocietyOfNorthAmerica',
  fajr: throwOnError(degrees(15)),
  isha: throwOnError(degrees(15))
}, {
  name: 'EgyptianGeneralAuthorityOfSurvey',
  fajr: throwOnError(degrees(19.5)),
  isha: throwOnError(degrees(17.5))
}, {
  name: 'UmmAlQuraUniversityMekkah',
  fajr: throwOnError(degrees(18.5)),
  isha: throwOnError(degrees(22.5))
}, {
  name: 'UniversityOfIslamicSciencesKarachi',
  fajr: throwOnError(degrees(18)),
  isha: throwOnError(degrees(18))
}, {
  name: 'InstituteOfGeophysicsUniversityOfTehranOfSurvey',
  fajr: throwOnError(degrees(17.7)),
  isha: throwOnError(degrees(14))
}, {
  name: 'ShiaIthnaAshariLevaResearchInstituteQumOfSurvey',
  fajr: throwOnError(degrees(16)),
  isha: throwOnError(degrees(14))
}]

const convention =
  (name: SupportedConventions = 'MuslimWorldLeague'): Convention =>
    conventions
      .find(convention =>
        convention.name.toLowerCase() === name?.toLowerCase()) ??
      conventions[0]

export {
  convention,
  SupportedConventions,
  Convention
}
