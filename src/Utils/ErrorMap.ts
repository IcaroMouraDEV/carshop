export default function errorMap(message: string) {
  switch (message) {
    case 'Car not found':
      return { code: 404, message };
    // case 'Motorcycle not found':
    //   return { code: 404, message };
    case 'Invalid mongo id':
      return { code: 422, message };
    default:
      return { code: 500, message: 'Internal Error' };
  }
}