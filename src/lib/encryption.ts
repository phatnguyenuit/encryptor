import crypto from "crypto";

class Encryption {
  private cipher: crypto.Cipher;
  private decipher: crypto.Decipher;
  /**
   *
   * @param {*} algorithm crypto.getCiphers()
   * @param {*} password password
   */
  constructor(algorithm: string, password: string) {
    let key = Buffer.alloc(32); // key should be 32 bytes
    let iv = Buffer.alloc(16); // iv should be 16

    const password_buffer = Buffer.from(password);

    key = Buffer.concat([password_buffer], key.length);
    iv = Buffer.concat([password_buffer], iv.length);

    this.cipher = crypto.createCipheriv(algorithm, key, iv);
    this.decipher = crypto.createDecipheriv(algorithm, key, iv);
  }
  encrypt(data: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      try {
        const encrypted = Buffer.concat([
          this.cipher.update(data, "utf8"),
          this.cipher.final(),
        ]);
        resolve(encrypted);
      } catch (exception) {
        reject(exception);
      }
    });
  }

  decrypt(data: NodeJS.ArrayBufferView): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      try {
        const decrypted = Buffer.concat([
          this.decipher.update(data),
          this.decipher.final(),
        ]);
        resolve(decrypted);
      } catch (exception) {
        reject(exception);
      }
    });
  }
}

export default Encryption;
