// Create a new ArrayBuffer with a specified size (in bytes).
const buffer = new ArrayBuffer(4);

// Create a DataView to work with the ArrayBuffer.
const view = new DataView(buffer);

// Set values in the buffer using the DataView.
// Set an 8-bit signed integer (1 byte) at position 0.
view.setInt8(0, 42);
// Set a 16-bit little-endian signed integer (2 bytes) at position 1.
view.setInt16(1, 12345, true);

// Get values from the buffer using the DataView.
// Get the 8-bit integer at position 0.
const value1 = view.getInt8(0);
// Get the 16-bit little-endian integer at position 1.
const value2 = view.getInt16(1, true);

console.log(value1); // 42
console.log(value2); // 12345

// Resize by creating a new ArrayBuffer with a larger size.
const newSize = 8;
const newBuffer = new ArrayBuffer(newSize);

// Create a DataView to work with the new ArrayBuffer.
const newView = new DataView(newBuffer);

// Copy data from the old buffer to the new buffer.
for (let i = 0; i < buffer.byteLength; i++) {
  newView.setUint8(i, view.getUint8(i));
}

const newValue1 = view.getInt8(0);
const newValue2 = view.getInt16(1, true);

console.log(newValue1); // 42
console.log(newValue2); // 12345
