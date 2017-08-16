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
      fName: _.get(user, 'detail.fName')? user.detail.fName : null,
      lastName: _.get(user, 'detail.lastName')? user.detail.lastName : null,
      nickName: _.get(user, 'detail.nickName')? user.detail.nickName : null,
      sex: _.get(user, 'detail.sex')? user.detail.sex : null,
      age: _.get(user, 'detail.nickName')? user.detail.nickName : null,
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
    },

    salary: {
      price: _.get(user, 'salary.price')? user.salary.price : null,
      visaPaidBy: _.get(user, 'salary.visaPaidBy')? user.salary.visaPaidBy : null,
    },

    createAt: moment().format(),
  }
}