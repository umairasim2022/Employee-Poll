import { _saveQuestion, _saveQuestionAnswer } from "../data/_DATA";

describe("Data functions saveQuestion to be tested", () => {
  it("should save the given question", async () => {
    const question = {
      author: ":author:",
      timestamp: 100,
      optionOneText: ":optionOne.text:",
      optionTwoText: ":optionTwo.text:",
    };

    const res = await _saveQuestion(question);
    expect(res.id).toBeTruthy();
    expect(res.author).toBe(":author:");
    expect(res.optionOne.text).toBe(":optionOne.text:");
    expect(res.optionTwo.text).toBe(":optionTwo.text:");
  });

  it("should not save the given invalid question", () => {
    const res = _saveQuestion({});

    expect(res).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("Data function saveQuestionAnswer to be tested", () => {
  it("answer should be saved", async () => {
    const answer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    const res = await _saveQuestionAnswer(answer);
    expect(res).toEqual(true);
  });

  it("invalid answer should not be saved", () => {
    const res = _saveQuestionAnswer({});

    expect(res).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});
