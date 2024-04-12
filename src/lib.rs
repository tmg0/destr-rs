#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use serde_json::{from_str, Value};

#[napi]
pub fn destr(value: String) -> napi::Result<Value> {
  let _value = value.trim();

  if _value.len() <= 9 {
    let _lval = _value.to_lowercase();
    if &_lval == "true" {
      return Ok(Value::Bool(true));
    }
    if &_lval == "false" {
      return Ok(Value::Bool(false));
    }
    if &_lval == "undefined" {
      return Ok(Value::Null);
    }
    if &_lval == "null" {
      return Ok(Value::Null);
    }
  }

  Ok(from_str(_value).unwrap())
}
