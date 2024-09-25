import { Readable } from "stream";

function BufferToStream(buffer: Buffer) {
  const stream = new Readable();

  stream.push(buffer);
  stream.push(null);

  return stream;
}

export default BufferToStream;