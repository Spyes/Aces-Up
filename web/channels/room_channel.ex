defmodule Acesup.RoomChannel do
  use Acesup.Web, :channel

  def join("rooms:" <> _room_id, _params, socket) do
    {:ok, %{hand: []}, socket}
  end

  def handle_in("draw_card", _params, socket) do
    {:reply, {:ok, %{hand: [%{rank: "King", suit: "Diamonds"}]}}, socket}
  end
end
