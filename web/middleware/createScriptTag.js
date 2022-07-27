import {ScriptTag} from '@shopify/shopify-api/dist/rest-resources/2022-07/index.js';
export const createScriptTag = async (session) => {
    const script_tag = new ScriptTag({session: session});
    script_tag.id = 176124985403;
    script_tag.src = `${process.env.HOST}/web/script_tag.js`;
    await script_tag.save({});
};