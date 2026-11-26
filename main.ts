// One-Star Review of Something Essential — a make.fun Mini entry.
//
// The brief asks for one single-line one-star review, at most 160
// characters, of an everyday essential everyone relies on. The joke
// has to be deadpan, a real complaint filed in earnest against a thing
// that cannot be fixed, and it has to land in one line — with the
// turn in the last few words.
//
// The subject is gravity. It is the most essential thing on the list
// — it holds the whole planet together — and the most unfixable: you
// cannot leave a one-star review of gravity and expect a patch, and
// there is no customer-service desk for physics. The grievance is
// true and specific: gravity never takes a day off, never says sorry,
// and it is never more diligent than in the half-second your phone is
// falling face-down. That last clause is the turn: the review starts
// as a complaint about a force of nature and ends as a complaint about
// a cracked screen, which is the only part of gravity anyone actually
// resents.
//
// Node 22, standard library only, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review, kept as the parts a real review site would store: the
// star rating, the subject under review, the grievance, and the turn
// — the last few words where the joke lands. Splitting them keeps
// the deadpan structure visible: rating first, then the complaint,
// then the sting.
class OneStarReview {
  static readonly RATING = "One star.";
  static readonly SUBJECT = "Gravity";
  static readonly GRIEVANCE =
    "never takes a day off, never says sorry,";
  static readonly TURN =
    "and somehow only ever works when my phone is falling face-down.";

  static text(): string {
    // Rating first, then the subject, then the grievance, then the
    // turn — the same order a review site shows them, and the same
    // order a reader's eye expects. The spaces between the parts are
    // the only joining the line ever gets.
    return [
      OneStarReview.RATING,
      OneStarReview.SUBJECT,
      OneStarReview.GRIEVANCE,
      OneStarReview.TURN,
    ].join(" ");
  }

  // The gate sealed in the bounty kit: the entry must be UTF-8 text
  // of 1 to 160 characters, not only white space, and the brief adds
  // that it must be a single line. Characters are counted as code
  // points, so the apostrophes and the em dash each count as one.
  static checkGate(line: string): void {
    const n = [...line].length;
    if (line.trim() === "") {
      throw new Error("review must not be blank");
    }
    if (line.includes("\n") || line.includes("\r")) {
      throw new Error("review must be a single line");
    }
    if (n < 1 || n > 160) {
      throw new Error(`review must be 1-160 characters, got ${n}`);
    }
  }
}

const LINE = OneStarReview.text();

// Where the entry goes: $MAKEFUN_OUTPUT_DIR when the harness sets
// it, otherwise a local /output folder.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

OneStarReview.checkGate(LINE);
mkdirSync(outDir, { recursive: true });
// No trailing newline: the review is one line, and the file is one
// line too, so two runs always produce byte-identical output.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
