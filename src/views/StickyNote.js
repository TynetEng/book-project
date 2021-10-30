import React, { Component, useRef } from 'react'
import './StickyNote.css'

export default function StickyNote() {
    const addNote = useRef()
    function displayNote() {
        document.getElementById('addNote').style.display = "inherit"
    }
    function closeNote() {
        document.getElementById('addNote').style.display = "none"
    }
    return (
        <div>
            <div className="fill">
                <div className="parent">
                    <div className="nave">
                        <div>
                            <button onClick={() => { displayNote() }}><i className="fa fa-plus"></i></button>
                        </div>
                        <div className="right">
                            <div>
                                <button><i className="fa fa-gear"></i></button>
                            </div>
                            <div>
                                <button><i className="fa fa-close"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="headie">
                        <h4>Sticky Notes</h4>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <button><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <div className="addNote" id="addNote" contenteditable="true">
                    <div className="addNote-body">
                        <div className="navie">
                            <div>
                                <button onClick={() => { displayNote() }}><i className="fa fa-plus"></i></button>
                            </div>
                            <div className="right">
                                <div>
                                    <button><i className="fa fa-gear"></i></button>
                                </div>
                                <div>
                                    <button><i className="fa fa-ellipsis"></i></button>
                                </div>
                                <div>
                                    <button onClick={()=> {closeNote()}}><i className="fa fa-close"></i></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <textarea name="" id="" cols="35" rows="5" placeholder="Take a note..."></textarea>
                        </div>
                        <div className="bottom">
                            <div>
                                <button><i className="fa fa-bold"></i></button>
                            </div>
                            <div>
                                <button><i className="fa fa-italic"></i></button>
                            </div>
                            <div>
                                <button><i className="fa fa-underline"></i></button>
                            </div>
                            <div>
                                <button><i className="fa fa-strikethrough"></i></button>
                            </div>
                            <div>
                                <button><i className="fa fa-list"></i></button>
                            </div>
                            <div>
                                <button><i className="fa fa-image"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


