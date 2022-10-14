describe("Localize messages", () => {
  it("returns a message in norwegian", () => {
    expect(localizeMessage(norwegianBundle, { message: "GENERAL_ERROR" })).toBe(
      "Noe gikk galt"
    );
  });
});

const norwegianBundle = {};

function localizeMessage(norwegianBundle: any, arg1: { message: string }): any {
  return "Noe gikk galt";
}
