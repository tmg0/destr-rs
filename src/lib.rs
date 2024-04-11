#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn destr(value: String) -> napi::Result<serde_json::Value> {
  Ok(serde_json::from_str(&value).unwrap())
}
