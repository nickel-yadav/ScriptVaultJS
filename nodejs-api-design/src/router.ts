import { Router } from "express";
import { body, oneOf } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Product
 */
router.get("/product", (req, res, next) => {
  res.json({ message: "Hello" });
});
router.get("/product/:id", (req, res, next) => {
  res.json({ message: "Product Data" });
});
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res, next) => {
    res.json({ product: "Product updated" });
  }
);
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  (req, res, next) => {
    res.json({ product: "Post Validation Complete" });
  }
);
router.delete("/product/:id", () => {});

/**
 * Update
 */
router.get("/update", (req, res, next) => {
  res.json({ message: "Get Updates" });
});
router.get("/update/:id", (req, res, next) => {
  res.json({ message: "Got Updates with ID" });
});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  oneOf([body("IN_PROGRESS"), body("SHIPPED"), body("DEPRECATED")]),
  body("version").optional(),
  handleInputErrors,
  (req, res, next) => {
    res.status(200);
    res.json({ message: "Update put completed" });
  }
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  handleInputErrors,
  (req, res, next) => {
    res.json({ message: "Update post completed" });
  }
);
router.delete("/update/:id", () => {});

/**
 * Update Point
 */
router.get("/updatepoint", (req, res, next) => {
  res.json({ message: "Update point GET successful" });
});
router.get("/updatepoint/:id", (req, res, next) => {
  res.json({ message: "Update point GET by ID successful" });
});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  body("updateId").exists().isString(),
  handleInputErrors,
  (req, res, next) => {
    res.json({ message: "Update point put successful" });
  }
);
router.post(
  "/updatepoint",
  body("name").exists().isString(),
  body("description").exists().isString(),
  body("updateId").exists().isString(),
  handleInputErrors,
  (req, res, next) => {
    res.json({ message: "Update point post successful" });
  }
);
router.delete("/updatepoint/:id", () => {});

export default router;
