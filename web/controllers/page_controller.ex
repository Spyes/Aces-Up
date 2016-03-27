defmodule Acesup.PageController do
  use Acesup.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
