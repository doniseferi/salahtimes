import { AngularDegrees, degrees } from '../maths'
import { ErrorOr } from '../either'

const enum SupportedConventions {
  MuslimWorldLeague = 'Muslim World League',
  IslamicSocietyOfNorthAmerica = 'Islamic Society Of North America (ISNA)',
  EgyptianGeneralAuthorityOfSurvey = 'Egyptian General Authority Of Survey',
  UmmAlQuraUniversity = 'Umm al-Qura University, Makkah',
  UniversityOfIslamicSciences = 'University of Islamic Sciences, Karachi',
  InstituteOfGeophysics = 'Institute of Geophysics, University of Tehran',
  ShiaIthnaAshari = 'Shia Ithna Ashari, Leva Research Institute, Qum',
}

const convention =
  (name: SupportedConventions = SupportedConventions.MuslimWorldLeague): Convention =>
    conventions
      .find(convention => convention.name === name)
      ?.value ?? conventions[0].value

interface Convention {
  fajr(): ErrorOr<Readonly<AngularDegrees>>
  isha(): ErrorOr<Readonly<AngularDegrees>>
}

const conventions: Array<{ name: SupportedConventions, value: Convention }> = [
  {
    name: SupportedConventions.MuslimWorldLeague,
    value: {
      fajr: () => degrees(18),
      isha: () => degrees(17)
    }
  },
  {
    name: SupportedConventions.IslamicSocietyOfNorthAmerica,
    value: {
      fajr: () => degrees(15),
      isha: () => degrees(15)
    }
  }, {
    name: SupportedConventions.EgyptianGeneralAuthorityOfSurvey,
    value: {
      fajr: () => degrees(19.5),
      isha: () => degrees(17.5)
    }
  }, {
    name: SupportedConventions.UmmAlQuraUniversity,
    value: {
      fajr: () => degrees(18.5),
      isha: () => degrees(22.5)
    }
  }, {
    name: SupportedConventions.UniversityOfIslamicSciences,
    value: {
      fajr: () => degrees(18),
      isha: () => degrees(18)
    }
  }, {
    name: SupportedConventions.InstituteOfGeophysics,
    value: {
      fajr: () => degrees(17.7),
      isha: () => degrees(14)
    }
  }, {
    name: SupportedConventions.ShiaIthnaAshari,
    value: {
      fajr: () => degrees(16),
      isha: () => degrees(14)
    }
  }]

export {
  convention,
  SupportedConventions
}
