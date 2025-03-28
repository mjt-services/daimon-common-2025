import { iff, isDefined } from "@mjt-engine/object";
import { renderTemplate } from "./renderTemplate";
export const daimonToSystemPrompt = (daimon, vars = {}) => {
    const { chara } = daimon;
    const { data } = chara;
    const { description, personality, name, system_prompt, extensions = {}, mes_example, post_history_instructions, scenario, } = data;
    return [
        iff(name, (x) => "The assistant's name is " + x),
        iff(extensions.depth_prompt, (dp) => renderTemplate(dp.prompt, vars)),
        renderTemplate(description, vars),
        renderTemplate(personality, vars),
        renderTemplate(scenario, vars),
        renderTemplate(mes_example, vars),
        renderTemplate(system_prompt, vars),
        renderTemplate(post_history_instructions, vars),
    ]
        .filter(isDefined)
        .join("\n");
};
//# sourceMappingURL=daimonToSystemPrompt.js.map