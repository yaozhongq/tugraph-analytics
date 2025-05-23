/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * This file is generated by parrot must
 * DOCUMENT LIST:
 * parrot must: http://gitlab.alibaba-inc.com/parrot/parrot-tool-must
 * @ali/global-locale: http://gitlab.alibaba-inc.com/parrot/global-locale
 * @ali/global-string-format: http://gitlab.alibaba-inc.com/parrot/global-string-format
 */

import locale from "@aligov/global-locale";
import stringFormat from "@aligov/global-string-format";
import strings from "./strings";

let language; // Current language
let intl; // Instance of intl-universal. Create by provideIntl
/**
 * update instance of intl universal
 */
function update() {
  const { lang } = locale.getLocale();
  language = lang;
  intl = stringFormat.init(lang, strings);
}

/**
 * change current language
 * @param {string} langTag language tag config above
 */
function change(langTag) {
  locale.setLang(langTag);
  update();
}
/**
 * Format string by key
 * For example:
 * $i18n.get('jsx.home.title'),
 * $i18n.get({
 *    id: 'jsx.home.hello',
 *    defaultMessage: 'Hello {name}' // not required
 * },{
 *  name: 'Alice'
 * })
 * More syntax: https://formatjs.io/guides/message-syntax/
 * @param {string|object} id key or object
 * @param {object} variable variable for id
 * @return {string} format message
 */
function get(id, variable = {}) {
  if (!intl) update();
  if (typeof id === "string") {
    return stringFormat.format(
      {
        id: id,
      },
      variable
    );
  } else if (typeof id === "object" && id.dm) {
    id.defaultMessage = id.dm;
  }
  return stringFormat.format(
    {
      id: id.id,
      defaultString: id.dm,
    },
    variable
  );
}

export default {
  get,
  update,
  change,
  language,
};
