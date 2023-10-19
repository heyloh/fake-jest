function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) throw new Error(`${actual} is not equal to ${expected}`)
    },
    toThrow() {
      try { actual(); } catch (e) { return; }
      throw new Error(`${actual} was expected to throw an error`)
    }
  }
}

async function test(title, callback) {
  try {
    await callback()
    console.log(`✅ ${title}`);
  } catch(error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

global.expect = expect
global.it = test
