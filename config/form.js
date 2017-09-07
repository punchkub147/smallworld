import _ from 'lodash'
import language from './language'

export const inputProfile = (local) => {
  const { messages } = language[local]
  return [
    {
      label: messages['Firstname'],
      ref: ['detail','firstName'],
    },
    {
      label: messages['Lastname'],
      ref: ['detail','lastName'],
    },
    {
      label: messages['Nickname'],
      ref: ['detail','nickName'],
    },
    {
      label: messages['Age'],
      ref: ['detail','age'],
    },
    {
      label: messages['Birthday'],
      ref: ['detail','birthDay'],
    },
    {
      label: messages['Address'],
      ref: ['detail','address'],
    },
    {
      label: messages['Mobile Number'],
      ref: ['detail','mobile'],
    },
    {
      label: messages['Passport Number'],
      ref: ['detail','passportNo'],
    },
    {
      label: messages['Passport Expiration Date'],
      ref: ['detail','passportExpirationDate'],
    },
    {
      label: messages['Visa Expiration Date'],
      ref: ['detail','visaExpirationDate'],
    },
    {
      label: messages['Status'],
      ref: ['detail','status'],
    },
    {
      label: messages['Education'],
      ref: ['detail','education'],
    },
    {
      label: messages['Religion'],
      ref: ['detail','religion'],
    },
    {
      label: messages['How long have you stayed in thailand?'],
      ref: ['detail','stayThaiTime'],
    },
    {
      label: messages['Salary'],
      ref: ['salary','price'],
    },
  ]
}
export const dropdownProfile = (local) => {
  const { messages } = language[local]
  return [
    {
      label: messages['Nationality'],
      value: ['All','Myanmar','Thai','Philippine','Laos','Cambodia'],
      ref: ['detail','nationality'],
    },
    {
      label: messages['Location'],
      value: ['All','Bangkok','Nonthaburi','Don Muang','Pattaya','Chiang Mai','Hua Hin','Phuket','Ko Samui'], 
      ref: ['detail','location'],
    },
    {
      label: messages['Work Time'],
      value: ['All','Full Time','Part Time'],
      ref: ['job','workTime'],
    },
  ]
}
export const radioProfile = (local) => {
  const { messages } = language[local]
  return [
    {
      label: messages['Position Teacher'],
      ref: ['job','teacher'],
    },
    {
      label: messages['Position Nanny'],
      ref: ['job','nanny'],
    },
  ]
}
/////////////////////////////
export const radioNanny = (local) => {
  const { messages } = language[local]
  return [
    {
      label: messages[`driverLicence`],
      ref: ['ability','driverLicense'],
    },
    {
      label: messages[`If you travel by car will you get carsick?`],
      ref: ['ability','carsick'],
    },
    {
      label: messages[`Do you smoke?`],
      ref: ['ability','smoke'],
    },
    {
      label: messages[`Can you swim?`],
      ref: ['ability','swim'],
    },
    {
      label: messages[`Can you cook Thai cuisine?`],
      ref: ['ability','cookThai'],
    },
    {
      label: messages[`Do you have experience for cooking for the family?`],
      ref: ['ability','cookForFamily'],
    },
    {
      label: messages[`Have you ever helped with homework?`],
      ref: ['ability','helpHomework'],
    },
    {
      label: messages[`Are you willing to work overtime?`],
      ref: ['question','workOvertime'],
    },
    {
      label: messages[`Do you like pets?`],
      ref: ['question','likePets'],
    },
    {
      label: messages[`Have you had experience with twins/triplet?`],
      ref: ['question','expTwin'],
    },
    {
      label: messages[`Do you still have any contacts with your previous employer?`],
      ref: ['question','contactWithEmployer'],
    },
    {
      label: messages[`Visa fee will be paid by ________`],
      ref: ['question','visaPaider'],
    },
    {
      label: messages[`Are you willing to participate any seminars that can upgrade your teaching skill?`],
      ref: ['question','upgrageSkill'],
    },
  ]
}
export const inputNanny = (local) => {
  const { messages } = language[local]
  return [
    {
      label: messages[`Why did you choose to become a nanny?`],
      ref: ['question','becomeNanny'],
    },
    {
      label: messages[`What are your hobbies and interesting things about you?`],
      ref: ['question','hobbiesInterest'],
    },
  ]
}
/////////////////////////////
export const radioTeacher = (local) => {
  const { messages } = language[local]
  return [
    {
      label: messages[`driverLicence`],
      ref: ['ability','driverLicense'],
    },
    {
      label: messages[`Do you smoke?`],
      ref: ['ability','smoke'],
    },
    {
      label: messages[`Can you swim?`],
      ref: ['ability','swim'],
    },
    {
      label: messages[`Certificates or licenses you have for teaching or any field related to caretaking or babysitting.`],
      ref: ['question','certificatesTeaching'],
    },
    {
      label: messages[`Health concerns or allergies you have which would affect long-term work`],
      ref: ['question','concernsTeamWork'],
    },
    {
      label: messages[`Do you think you can work under pressure?`],
      ref: ['question','workPressure'],
    },
    {
      label: messages[`Are you willing to work overtime?`],
      ref: ['question','workOvertime'],
    },
    {
      label: messages[`Are you willing to do some extra work aside from teaching?`],
      ref: ['question','extraWork'],
    },
    {
      label: messages[`Do you like to work in a team?`],
      ref: ['question','teamWork'],
    },
    {
      label: messages[`Do you have teaching job experience?`],
      ref: ['question','expTeaching'],
    },
    {
      label: messages[`Do you like to work in a team?`],
      ref: ['question','workInTime'],
    },
    {
      label: messages[`Do you still have any contacts with your previous employer?`],
      ref: ['question','contactWithEmployer'],
    },
  ]
}
export const inputTeacher = (local) => {
  const { messages } = language[local]
  return [
    {
      label: messages[`Why did you choose to become a Teacher?`],
      ref: ['question','becomeTeacher'],
    },
    {
      label: messages[`What are your hobbies and interesting things about you?`],
      ref: ['question','hobbiesInterest'],
    },
    {
      label: messages[`How long can you waiting for interviewed? (after you fill this application)`],
      ref: ['question','interviewedTime'],
    },
  ]
}