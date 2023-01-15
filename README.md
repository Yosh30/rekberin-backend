# rekberin-backend

//to get data user 
GET:
get all: {url}/api/user/
get byId: {url}/api/user/{id}

//add data to m_user
POST:
{url}/api/user

{
  "id" : "{{reffNum}}",
  "first_name": "{{$randomFirstName}}",
  "last_name": "{{$randomLastName}}",
  "email": " {{$randomEmail}}",
  "profile_picture":  "{{$randomImageUrl}}",
  "phone_number":  "{{$randomInt}}",
  "role_id": "3",
  "password": "{{$randomPassword}}",
  "refferal_code": "{{$randomVerb}}",
  "balance": "{{$randomPrice}}",
  "balance_refferal":  "{{$randomPrice}}",
  "created_by" :  "{{$randomCatchPhraseNoun}}",
  "modified_by":  "{{$randomCatchPhraseNoun}}"
  }
  
  
  
