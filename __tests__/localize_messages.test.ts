describe("Localize messages", () => {
  it("returns a message in norwegian", () => {
    expect(
      localizeMessage(norwegianBundle, { message: MESSAGE["GENERAL_ERROR"] })
    ).toBe(norwegianBundle[MESSAGE["GENERAL_ERROR"]]);
  });
});

enum MESSAGE {
  GENERAL_ERROR = "GENERAL_ERROR",
}

type Bundle = {
  [key: string]: string;
};

const norwegianBundle: Bundle = {
  GENERAL_ERROR: "Noe gikk galt",
};

function localizeMessage(
  norwegianBundle: Bundle,
  requestError: { message: MESSAGE }
): string {
  return norwegianBundle[requestError.message];
}
