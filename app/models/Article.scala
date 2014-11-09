package models

import org.joda.time.DateTime

/**
 * Created by xmitya on 08.11.14.
 */
case class Article(
 id: Option[Long],
 title: String,
 content: String,
 author: User,
 tags: Set[String],
 publishDate: DateTime = DateTime.now(),
 views: Int
)

object Article {

  import play.api.libs.json._
  import play.api.libs.functional.syntax._

  implicit val ArticleFromJson: Reads[Article] = (
      (__ \ "id").readNullable[Long] ~
      (__ \ "title").read[String] ~
      (__ \ "content").read[String] ~
      (__ \ "author").read[User] ~
      (__ \ "tags").read[Set[String]] ~
      (__ \ "publishDate").read[DateTime] ~
      (__ \ "views").read[Int]
  )(Article.apply _)

  implicit val ArticleToJson: Writes[Article] = (
    (__ \ "id").write[Long] ~
      (__ \ "title").write[String] ~
      (__ \ "content").write[String] ~
      (__ \ "author").write[User] ~
      (__ \ "tags").write[Set[String]] ~
      (__ \ "publishDate").write[DateTime] ~
      (__ \ "views").write[Int]

    )((article: Article) => (
     article.id.getOrElse(1),
      article.title,
      article.content,
      article.author,
      article.tags,
      article.publishDate,
      article.views
    ))

  def findById(id: Long): Article = {
    new Article(
      Some(1),
      "Test article",
      "Test content",
      User.findOneById(3).getOrElse(new User(None,"2","3","4",None)),
      Set("test"),
      DateTime.now(),
      26
    )
  }

  def getArticles(pageStart: Int, pageSize: Int, orderBy: Option[String]): Seq[Article] = {
    List(findById(1))
  }
}
