import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "../../assets/PocketChangeCover.jpg";

export default function CardPub() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>"Pocket Change: The Official Transcription Book"</Card.Title>
          <Card.Text>
            In the summer of 2018 Zach had the opportunity to work with world renown musician, and drummer{" "}
            <a href="https://www.youtube.com/results?search_query=nate+smith">Nate Smith</a>. He transcribed all 11 solos from
            Nate's album "Pocket Change" to create a collection of highly detailed, extremely advanced drum solos. It has sold all
            over the world in paperback, ebook, and pdf. Click the cover to see a preview 📖
          </Card.Text>
          <Button
            className="mb-4"
            target="_blank"
            href="http://www.natesmithmusic.com/products/pocketchangephysicalbook"
            variant="dark"
          >
            Shop
          </Button>
          <a target="_blank" href="https://www.blurb.com/ebooks/reader.html?e=683763#/spread/7">
            <Card.Img variant="top" href="https://www.blurb.com/ebooks/reader.html?e=683763#/spread/7" src={Image} />
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}
