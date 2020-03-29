const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Geração Unique ID", () => {
  it("Deve gerar um ID exclusivo", () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
