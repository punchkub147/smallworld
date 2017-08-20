import _ from 'lodash'
import moment from 'moment'

export const userModel = (user) => {
  return {
    uid: _.get(user, 'uid')? user.uid : null,
    email: _.get(user, 'email')? user.email : null,
    imageUrl: _.get(user, 'imageUrl')? user.imageUrl : null,
    displayName: _.get(user, 'displayName')? user.displayName : null,

    job: {
      teacher: _.get(user, 'job.teacher')? user.job.teacher : null,
      nanny: _.get(user, 'job.nanny')? user.job.nanny : null,
    },

    detail: {
      firstName: _.get(user, 'detail.firstName')? user.detail.firstName : null,
      lastName: _.get(user, 'detail.lastName')? user.detail.lastName : null,
      nickName: _.get(user, 'detail.nickName')? user.detail.nickName : null,
      gender: _.get(user, 'detail.gender')? user.detail.gender : null,
      age: _.get(user, 'detail.age')? user.detail.age : null,
      address: _.get(user, 'detail.address')? user.detail.address : null,
      mobile: _.get(user, 'detail.mobile')? user.detail.mobile : null,
      civilStatus: _.get(user, 'detail.civilStatus')? user.detail.civilStatus : null,
      haveKids: _.get(user, 'detail.haveKids')? user.detail.haveKids : null,
      birthDay: _.get(user, 'detail.birthDay')? user.detail.birthDay : null,
      pregnant: _.get(user, 'detail.pregnant')? user.detail.pregnant : null,
      nationality: _.get(user, 'detail.nationality')? user.detail.nationality : null,
      religion: _.get(user, 'detail.religion')? user.detail.religion : null,
      passportNo: _.get(user, 'detail.passportNo')? user.detail.passportNo : null,
      passportExpirationDate: _.get(user, 'detail.passportExpirationDate')? user.detail.passportExpirationDate : null,
      visaExpirationDate: _.get(user, 'detail.visaExpirationDate')? user.detail.visaExpirationDate : null,
      education: _.get(user, 'detail.education')? user.detail.education : null,
      status: _.get(user, 'detail.status')? user.detail.status : null,
      stayThaiTime: _.get(user, 'detail.stayThaiTime')? user.detail.stayThaiTime : null,
    },

    ability: {
      languageSpoken: {
        thai: _.get(user, 'ability.languageSpoken.thai')? user.ability.languageSpoken.thai : null,
        english: _.get(user, 'ability.languageSpoken.english')? user.ability.languageSpoken.english : null,
        chinese: _.get(user, 'ability.languageSpoken.chinese')? user.ability.languageSpoken.chinese : null,
      },
      driverLicense: _.get(user, 'ability.driverLicense')? user.ability.driverLicense : null,
      smoke: _.get(user, 'ability.smoke')? user.ability.smoke : null,
      swim: _.get(user, 'ability.swim')? user.ability.swim : null,
      sing: _.get(user, 'ability.sing')? user.ability.sing : null,
      carsick: _.get(user, 'ability.carsick')? user.ability.carsick : null,
      cookThai: _.get(user, 'ability.cookThai')? user.ability.cookThai : null,
      cookForFamily: _.get(user, 'ability.cookForFamily')? user.ability.cookForFamily : null,
      helpHomework: _.get(user, 'ability.helpHomework')? user.ability.helpHomework : null,
    },

    question: {
      //All

      //nanny
      becomeNanny: _.get(user, 'question.becomeNanny')? user.question.becomeNanny : null,
      workOvertime: _.get(user, 'question.workOvertime')? user.question.workOvertime : null,
      likePets: _.get(user, 'question.likePets')? user.question.likePets : null,
      expTwin: _.get(user, 'question.expTwin')? user.question.expTwin : null,
      contactWithEmployer: _.get(user, 'question.contactWithEmployer')? user.question.contactWithEmployer : null,
      visaPaider: _.get(user, 'question.visaPaider')? user.question.visaPaider : null,
      upgrageSkill: _.get(user, 'question.upgrageSkill')? user.question.upgrageSkill : null,
      hobbiesInterest: _.get(user, 'question.hobbiesInterest')? user.question.hobbiesInterest : null,
      //teacher
      certificatesTeaching: _.get(user, 'question.certificatesTeaching')? user.question.certificatesTeaching : null,
      concernsTeamWork: _.get(user, 'question.concernsTeamWork')? user.question.concernsTeamWork : null,
      workPressure: _.get(user, 'question.workPressure')? user.question.workPressure : null,
      extraWork: _.get(user, 'question.extraWork')? user.question.extraWork : null,
      teamWork: _.get(user, 'question.teamWork')? user.question.teamWork : null,
      expTeaching: _.get(user, 'question.expTeaching')? user.question.expTeaching : null,
      workInTime: _.get(user, 'question.workInTime')? user.question.workInTime : null,
      becomeTeacher: _.get(user, 'question.becomeTeacher')? user.question.becomeTeacher : null,
      interviewedTime: _.get(user, 'question.interviewedTime')? user.question.interviewedTime : null,
    },

    salary: {
      price: _.get(user, 'salary.price')? user.salary.price : null,
      visaPaidBy: _.get(user, 'salary.visaPaidBy')? user.salary.visaPaidBy : null,
    },

    createAt: moment().format(),
  }
}