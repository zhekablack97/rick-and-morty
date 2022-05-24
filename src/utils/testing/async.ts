export class Ajax {
  static echo(data?: any) {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          rejects(new Error("error"));
        }
      }, 150);
    });
  }
}
