function b64(o: any) {
  const s = JSON.stringify(o);
  const encoder = new TextEncoder();
  const data = encoder.encode(s);
  return data.toBase64(); // spidermonkey and javascriptcore already implement this
}

const keyPair = await crypto.subtle.generateKey(
  "Ed25519",
  true,
  ["sign", "verify"]
);

const a = await crypto.subtle.exportKey("jwk", keyPair.privateKey);
const b = await crypto.subtle.exportKey("jwk", keyPair.publicKey);
console.log(b64(a));
console.log(b64(b));

export { };