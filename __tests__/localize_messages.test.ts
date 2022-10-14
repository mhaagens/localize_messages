describe("Localize messages", () => {
  it("returns a message in norwegian", () => {
    expect(
      localizeMessage(norwegianBundle, { message: MESSAGE["GENERAL_ERROR"] })
    ).toBe("Noe gikk galt");
  });

  it("returns network error in english", () => {
    expect(
      localizeMessage(englishBundle, { message: MESSAGE["NETWORK_ERROR"] })
    ).toBe("Something went wrong");
  });
});

enum MESSAGE {
  GENERAL_ERROR = "GENERAL_ERROR",
  NETWORK_ERROR = "NETWORK_ERROR",
}

type Bundle = {
  [key: string]: string;
};

const norwegianBundle: Bundle = {
  GENERAL_ERROR: "Noe gikk galt",
};

const englishBundle: Bundle = {
  NETWORK_ERROR: "Something went wrong",
};

function localizeMessage(
  norwegianBundle: Bundle,
  requestError: { message: MESSAGE }
): string {
  return norwegianBundle[requestError.message];
}
