import * as builder from "botbuilder";

export const resolveDocumentFileType = (fileEntities: builder.IEntity[]) => {
  const transform = {
    word: ["doc", "docx"],
    powerpoint: ["ppt", "pptx"],
    excel: ["xslx"],
    text: ["txt"]
  };
  let result = [];

  fileEntities.forEach(docType => {
    // transform word to doc and docx
    if (transform[docType.entity.toLocaleLowerCase()]) {
      transform[docType.entity].forEach(synonym => {
        result.push(synonym);
      });
    } else {
      result.push(docType.entity);
    }
  });
  return result;
};

export const resolveDocumentTitle = (titleEntities: builder.IEntity[]) => {
  let result = [];
  titleEntities.forEach(element => {
    result.push(element.entity);
  });
  return result;
};

export const resolveDocumentAuthor = (authorEntities: builder.IEntity[]) => {
  let result = [];
  authorEntities.forEach(element => {
    result.push(element.entity);
  });
  return result;
};

/**
 * Offers support to parse the following date entities:
 *  builtin.datetimeV2.datetime
 *  builtin.datetimeV2.date
 *  builtin.datetimeV2.daterange
 *  builtin.datetimeV2.datetimerange
 *  ---- NOT YET
 *  builtin.datetimeV2.time
 *  builtin.datetimeV2.timerange
 *  builtin.datetimeV2.duration
 */
export const resolveDateV2 = (entities: builder.IEntity[]) => {
  var dateTime: any = builder.EntityRecognizer.findEntity(
    entities,
    "builtin.datetimeV2.datetime"
  );

  var date: any = builder.EntityRecognizer.findEntity(
    entities,
    "builtin.datetimeV2.date"
  );

  var daterange: any = builder.EntityRecognizer.findEntity(
    entities,
    "builtin.datetimeV2.daterange"
  );

  var dateTimeRange: any = builder.EntityRecognizer.findEntity(
    entities,
    "builtin.datetimeV2.datetimerange"
  );

  if (dateTime && dateTime.resolution) {
    return dateTime.resolution.values[0].value;
  }
  if (date && date.resolution) {
    return date.resolution.values[0].value;
  }
  if (daterange && daterange.resolution) {
    return daterange.resolution.values[0].end;
  }

  if (dateTimeRange && dateTimeRange.resolution) {
    return dateTimeRange.resolution.values[0].end;
  }
};