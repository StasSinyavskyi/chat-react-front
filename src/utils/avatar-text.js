export default function avatarText(writerName){
  try {
    return writerName.split(' ').map(word=>word[0]).map(chat=>chat.toUpperCase()).slice(0,2);
  }
  catch(e){
    console.log(e);
    return ':)'
   }
}
