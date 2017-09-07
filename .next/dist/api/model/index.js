'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userModel = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userModel = exports.userModel = function userModel(user) {
  return {
    uid: _lodash2.default.get(user, 'uid') ? user.uid : null,
    email: _lodash2.default.get(user, 'email') ? user.email : null,
    imageUrl: _lodash2.default.get(user, 'imageUrl') ? user.imageUrl : null,
    displayName: _lodash2.default.get(user, 'displayName') ? user.displayName : null,

    job: {
      teacher: _lodash2.default.get(user, 'job.teacher') ? user.job.teacher : null,
      nanny: _lodash2.default.get(user, 'job.nanny') ? user.job.nanny : null,
      workTime: _lodash2.default.get(user, 'job.workTime') ? user.job.workTime : null
    },

    detail: {
      firstName: _lodash2.default.get(user, 'detail.firstName') ? user.detail.firstName : null,
      lastName: _lodash2.default.get(user, 'detail.lastName') ? user.detail.lastName : null,
      nickName: _lodash2.default.get(user, 'detail.nickName') ? user.detail.nickName : null,
      gender: _lodash2.default.get(user, 'detail.gender') ? user.detail.gender : null,
      age: _lodash2.default.get(user, 'detail.age') ? user.detail.age : null,
      address: _lodash2.default.get(user, 'detail.address') ? user.detail.address : null,
      mobile: _lodash2.default.get(user, 'detail.mobile') ? user.detail.mobile : null,
      civilStatus: _lodash2.default.get(user, 'detail.civilStatus') ? user.detail.civilStatus : null,
      haveKids: _lodash2.default.get(user, 'detail.haveKids') ? user.detail.haveKids : null,
      birthDay: _lodash2.default.get(user, 'detail.birthDay') ? user.detail.birthDay : null,
      pregnant: _lodash2.default.get(user, 'detail.pregnant') ? user.detail.pregnant : null,
      nationality: _lodash2.default.get(user, 'detail.nationality') ? user.detail.nationality : null,
      religion: _lodash2.default.get(user, 'detail.religion') ? user.detail.religion : null,
      passportNo: _lodash2.default.get(user, 'detail.passportNo') ? user.detail.passportNo : null,
      passportExpirationDate: _lodash2.default.get(user, 'detail.passportExpirationDate') ? user.detail.passportExpirationDate : null,
      visaExpirationDate: _lodash2.default.get(user, 'detail.visaExpirationDate') ? user.detail.visaExpirationDate : null,
      education: _lodash2.default.get(user, 'detail.education') ? user.detail.education : null,
      status: _lodash2.default.get(user, 'detail.status') ? user.detail.status : null,
      stayThaiTime: _lodash2.default.get(user, 'detail.stayThaiTime') ? user.detail.stayThaiTime : null,
      location: _lodash2.default.get(user, 'detail.location') ? user.detail.location : null
    },

    ability: {
      languageSpoken: {
        thai: _lodash2.default.get(user, 'ability.languageSpoken.thai') ? user.ability.languageSpoken.thai : null,
        english: _lodash2.default.get(user, 'ability.languageSpoken.english') ? user.ability.languageSpoken.english : null,
        chinese: _lodash2.default.get(user, 'ability.languageSpoken.chinese') ? user.ability.languageSpoken.chinese : null
      },
      driverLicense: _lodash2.default.get(user, 'ability.driverLicense') ? user.ability.driverLicense : null,
      smoke: _lodash2.default.get(user, 'ability.smoke') ? user.ability.smoke : null,
      swim: _lodash2.default.get(user, 'ability.swim') ? user.ability.swim : null,
      sing: _lodash2.default.get(user, 'ability.sing') ? user.ability.sing : null,
      carsick: _lodash2.default.get(user, 'ability.carsick') ? user.ability.carsick : null,
      cookThai: _lodash2.default.get(user, 'ability.cookThai') ? user.ability.cookThai : null,
      cookForFamily: _lodash2.default.get(user, 'ability.cookForFamily') ? user.ability.cookForFamily : null,
      helpHomework: _lodash2.default.get(user, 'ability.helpHomework') ? user.ability.helpHomework : null
    },

    question: {
      //All

      //nanny
      becomeNanny: _lodash2.default.get(user, 'question.becomeNanny') ? user.question.becomeNanny : null,
      workOvertime: _lodash2.default.get(user, 'question.workOvertime') ? user.question.workOvertime : null,
      likePets: _lodash2.default.get(user, 'question.likePets') ? user.question.likePets : null,
      expTwin: _lodash2.default.get(user, 'question.expTwin') ? user.question.expTwin : null,
      contactWithEmployer: _lodash2.default.get(user, 'question.contactWithEmployer') ? user.question.contactWithEmployer : null,
      visaPaider: _lodash2.default.get(user, 'question.visaPaider') ? user.question.visaPaider : null,
      upgrageSkill: _lodash2.default.get(user, 'question.upgrageSkill') ? user.question.upgrageSkill : null,
      hobbiesInterest: _lodash2.default.get(user, 'question.hobbiesInterest') ? user.question.hobbiesInterest : null,
      //teacher
      certificatesTeaching: _lodash2.default.get(user, 'question.certificatesTeaching') ? user.question.certificatesTeaching : null,
      concernsTeamWork: _lodash2.default.get(user, 'question.concernsTeamWork') ? user.question.concernsTeamWork : null,
      workPressure: _lodash2.default.get(user, 'question.workPressure') ? user.question.workPressure : null,
      extraWork: _lodash2.default.get(user, 'question.extraWork') ? user.question.extraWork : null,
      teamWork: _lodash2.default.get(user, 'question.teamWork') ? user.question.teamWork : null,
      expTeaching: _lodash2.default.get(user, 'question.expTeaching') ? user.question.expTeaching : null,
      workInTime: _lodash2.default.get(user, 'question.workInTime') ? user.question.workInTime : null,
      becomeTeacher: _lodash2.default.get(user, 'question.becomeTeacher') ? user.question.becomeTeacher : null,
      interviewedTime: _lodash2.default.get(user, 'question.interviewedTime') ? user.question.interviewedTime : null
    },

    salary: {
      price: _lodash2.default.get(user, 'salary.price') ? user.salary.price : null,
      visaPaidBy: _lodash2.default.get(user, 'salary.visaPaidBy') ? user.salary.visaPaidBy : null
    },

    createAt: (0, _moment2.default)().format()
  };
};