const axios = require("axios");
const cheerio = require("cheerio");

const { addEditUrl } = require("../../helpers");

const Bookmark = require("./bookmark");

exports.create = async function(req, res, next) {
  try {
    const url = req.body.url;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const title = $("title").text() || "Untitled";
    const description =
      $('meta[name="description"]').attr("content") || "No description.";
    const userId = req.user.id;

    const bookmark = new Bookmark({
      date: Date.now(),
      url,
      title,
      description,
      userId
    });

    await bookmark.save();
    next();
  } catch (e) {
    next(e);
  }
};

exports.readAll = async function(req, res, next) {
  const bookmarks = await Bookmark.find({ userId: req.user.id }).sort([
    ["date", -1]
  ]);

  if (bookmarks) {
    bookmarks.map(addEditUrl(req.baseUrl));
  }

  res.render("bookmarks/showAll", { bookmarks });
};

exports.readOne = async function(req, res, next) {
  const id = req.params.id;
  const bookmark = await Bookmark.findById(id);
  bookmark.deletionUrl = req.originalUrl + "/delete";
  res.render("bookmarks/edit", { bookmark });
};

exports.delete = async function(req, res, next) {
  const id = req.params.id;
  await Bookmark.deleteOne({ _id: id });
  res.redirect("/bookmarks");
};
