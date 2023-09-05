import * as Yup from 'yup';

const schema = {
 addChild: Yup.object({
 firstName: Yup.string().trim().required('Enter FirstName').nullable(true),
 lastName: Yup.string().trim().required('Enter FirstName').nullable(true),
 mm: Yup.string()
 .matches(/^[0][1-9]$|^[1][0-2]/)
 .required()
 .nullable(true),
 dd: Yup.string()
 .matches(/^[0][1-9]$|^[1-2][0-9]$|^[3][0-1]/)
 .required()
 .nullable(true),
 yyyy: Yup.string().min(4).trim().required().nullable(true),
 }),
 // login: Yup.object({
 // username: Yup.string()
 // .trim()
 // .required(Strings.loginRegister.emptyUsername)
 // .nullable(true),
 // password: Yup.string()
 // .trim()
 // .required(Strings.loginRegister.emptyPassword)
 // .nullable(true),
 // }),
 // forgetPassword: Yup.object({
 // username: Yup.string()
 // .trim()
 // .required(Strings.loginRegister.emptyUsername)
 // .nullable(true),
 // }),
 // mobileOTP: Yup.object({
 // username: Yup.string()
 // .matches(
 // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
 // Strings.editProfile.phoneInvalid,
 // )
 // .min(10, Strings.editProfile.short)
 // .ma10, Strings.editProfile.long)
 // .required(Strings.editProfile.emptyPhone)
 // .nullable(true),
 // }),
 // editProfile: Yup.object({
 // username: Yup.string()
 // .trim()
 // .required(Strings.editProfile.emptyUsername)
 // .nullable(true),
 // firstname: Yup.string()
 // .trim()
 // .required(Strings.editProfile.emptyFirstName)
 // .nullable(true),
 // lastname: Yup.string()
 // .trim()
 // .required(Strings.editProfile.emptyLastName)
 // .nullable(true),
 // notes: Yup.string()
 // .trim()
 // .required(Strings.editProfile.emptyNotes)
 // .nullable(true),
 // dobstr: Yup.string()
 // .trim()
 // .required(Strings.editProfile.emptyDob)
 // .nullable(true),
 // phonenumber: Yup.string()
 // .matches(
 // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
 // Strings.editProfile.phoneInvalid,
 // )
 // .min(10, Strings.editProfile.short)
 // .ma10, Strings.editProfile.long)
 // .required(Strings.editProfile.emptyPhone)
 // .nullable(true),
 // }),
 // addPatient: Yup.object({
 // FirstName: Yup.string()
 // .min(2, Strings.editProfile.validName)
 // .trim(Strings.editProfile.validName)
 // .required(Strings.editProfile.emptyFirstName)
 // .nullable(true),
 // LastName: Yup.string()
 // .min(2, Strings.editProfile.validName)
 // .trim(Strings.editProfile.validName)
 // .required(Strings.editProfile.emptyLastName)
 // .nullable(true),
 // DateOfBirth: Yup.string()
 // .required(Strings.editProfile.emptyDob)
 // .nullable(true),
 // Phone: Yup.string()
 // .matches(
 // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
 // Strings.editProfile.phoneInvalid,
 // )
 // .min(10, Strings.editProfile.short)
 // .ma10, Strings.editProfile.long)
 // .required(Strings.editProfile.emptyPhone)
 // .nullable(true),
 // UserName: Yup.string()
 // .min(2, Strings.editProfile.validusername)
 // .trim()
 // .required(Strings.editProfile.emptyUsername)
 // .nullable(true),
 // Email: Yup.string()
 // .matches(
 // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
 // 'Email is invalid.',
 // )
 // .required(Strings.editProfile.emptyEmail)
 // .nullable(true),
 // Notes: Yup.string()
 // .trim()
 // .required(Strings.editProfile.emptyNotes)
 // .nullable(true),
 // PatientCode: Yup.string()
 // .trim()
 // .required(Strings.editProfile.emptyPatientCode)
 // .nullable(true),
 // Password: Yup.string()
 // .min(6, Strings.loginRegister.minPassword)
 // .trim()
 // .required(Strings.loginRegister.emptyPassword)
 // .nullable(true),
 // Address: Yup.string()
 // .trim()
 // .required(Strings.addPatient.AddressMessage)
 // .nullable(true),
 // }),
 // changePassword: Yup.object({
 // oldpassword: Yup.string()
 // .trim()
 // .required(Strings.loginRegister.emptyPassword)
 // .nullable(true),
 // newpassword: Yup.string()
 // .trim()
 // .test('Password-Match', 'Old-Password must not match', function (value) {
 // return this.parent.oldpassword !== value;
 // })
 // .required(Strings.loginRegister.emptyPassword)
 // .nullable(true),
 // confirmpassword: Yup.string()
 // .trim()
 // .oneOf([Yup.ref('newpassword'), null], 'Password must match')
 // .required(Strings.loginRegister.emptyPassword)
 // .nullable(true),
 // }),
 // tracker: Yup.object({
 // hold: Yup.string().trim().required(Strings.tracks.emptyHolds),
 // reps: Yup.string().trim().required(Strings.tracks.emptyReps),
 // sessions: Yup.string().trim().required(Strings.tracks.emptySessions),
 // notes: Yup.string().trim().required(Strings.tracks.emptyNotes),
 // date: Yup.string().trim().required(Strings.tracks.emptyDate),
 // time: Yup.string().trim().required(Strings.tracks.emptyTime),
 // }),
 // addAppointment: Yup.object({
 // notes: Yup.string().trim().required(Strings.tracks.emptyNotes),
 // }),
 // refer: Yup.object({
 // firstname: Yup.string().trim().required(Strings.refer.emptyFirstName),
 // lastname: Yup.string().trim().required(Strings.refer.emptyLastName),
 // email: Yup.string()
 // .matches(
 // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
 // 'Email is invalid.',
 // )
 // .required(Strings.refer.emptyEmail),
 // phone: Yup.string()
 // .matches(
 // /^(??:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[0-9]\d{9}$/,
 // Strings.refer.phoneInvalid,
 // )
 // .trim()
 // .required(Strings.refer.emptyPhone),
 // notes: Yup.string().trim().required(Strings.refer.emptyNotes),
 // }),
};

export default schema;